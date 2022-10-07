const router = require('express').Router();
const { Category, Quiz, User } = require('../../models');

router.get('/getCategories' /*temp route*/, withAuth, async (req, res) => {
    try{ 
      const allCategories = await Category.findAll({}
      ).catch((err) => { 
        res.json(err);
      });
        const categories = allCategories.map((categories) => categories.get({ plain: true }));
        res.render('categories' /*temp route*/, { 
          categories,
            logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    };   
   
});

router.get('/getCategories/:id' /*temp route*/, async (req, res) => {
    try {
      const oneCategory = await Category.findOne({
        where: {id: req.params.id},
      });
      const renderOneCategory = oneCategory.get({ plain: true })
  
      res.render('onePost'/*temp route*/, {
        renderOneCategory,
        logged_in: req.session.logged_in,
      })
  
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })


module.exports = router;