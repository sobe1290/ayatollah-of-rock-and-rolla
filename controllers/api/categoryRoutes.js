const { Category } = require('../../models');
const router = require('express').Router();

//None of these routes currently utilize authentication. Which ones do we need to add authentication to (withAuth)?

//This is the route to call if you need to get all the categories
router.get('/', async (req, res) => {
    try {
      const categoryData = await Category.findAll({
        //Include any other tables?
      }).catch((err) => {
        res.json(err);
      });
      const categories = categoryData.map((category) => category.get({ plain: true }));
      res.render('homepage' /*what are we rendering with this route?*/, {
        categories,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //This is the route to call to add a category (Required body part: title)
  router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create({
        title: req.body.title,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(categoryData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //This is the route to call to delete a category (required url parameter: id)
  router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id, /*Do we want it in parameters or body? its in parameters on this one*/
      },
    })
      .then((thisCategory) => {
        if (!thisCategory) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(thisCategory);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //This is the route to call to update a category (Required body parts: title, id)
  router.put('/', (req, res) => {
    Category.update({
      title: req.body.commentBody,
    }, {
      where: {
        id: req.body.id, /*Do we want it in parameters or body? its in body on this one*/
      },
    }).then((updateCategoryData) => {
      if (!updateCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(updateCategoryData);
    })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;