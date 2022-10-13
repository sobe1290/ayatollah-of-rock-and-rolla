const router = require('express').Router();
const {User, Category, Quiz, Score } = require('../models');

//This is the route for the main page
router.get('/', async (req, res) => {
    try{ 
        const activeUser = await User.findByPk(req.session.userID, {
            include: [{ model: Quiz,
                attributes:[
                    'id',
                    'title'
                ]},
                { model: Score,
                attributes: [
                    'score',
                    'quiz_id'
                ]}
            ]
        });

        console.log(activeUser)
        /*Do we need to query and models to go with the homepage?*/
      
        res.render('homepage'); /*what are we calling the handlebars home page?*/
    } catch (err) {
        res.status(500).json(err);
    };   
   
});

//This is the route to call for the sign up page
router.get('/signup', async (req, res) => {
    try{ 
        res.render('signup'); /*What are we calling the handlebars page for signup?*/
    } catch (err) {
        res.status(500).json(err);
    };  
});

// get all categories to render to page.
router.get('/categories', async (req, res) => {
    try {
      const categoryData = await Category.findAll({
        include: [{ model: Quiz,
          attributes: ['title']
        }],
      }).catch((err) => {
        res.json(err);
      });

      console.log(categoryData)

      // const categories = categoryData.map((category) => category.get({ plain: true }));
      // res.render('categories', { **Render all categories on category card**
      //   categories,
      //   logged_in: req.session.logged_in,
      // });
    } catch (err) {
      res.status(500).json(err);
    }
});

 // Get all quizzes under chosen category.
router.get('/categories/:id', async (req, res) => {
    try {
      const quizData = await Quiz.findAll({
        where: {
          category_id: req.params.id
        },
        attributes: ['title'],
        include: [{ model: Category,
          attributes:['title']
        }]
      })
      .catch((err) => {
        res.json(err);
      });
  
      console.log(quizData)
  
   // res.render('quizzes', { **Render list of quizzes under selected category**
      //   categories,
      //   logged_in: req.session.logged_in,
      // });

    }
      catch (err) {
        res.status(500).json(err);
      }
});


//This is the route to call for the login page
router.get('/login', (req, res) => {
    try{ 
      res.render('login'); /*What are we calling the handlebars page for login?*/
  } catch (err) {
      res.status(500).json(err);
  }; 
});

//This is the route to call to logout
router.post('/logout', (req, res) => {
if (req.session.logged_in) {
    req.session.destroy(() => {
    res.status(204).end();
    });
} else {
    res.status(404).end();
}
});


module.exports = router;