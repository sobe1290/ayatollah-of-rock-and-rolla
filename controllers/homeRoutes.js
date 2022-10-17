const express = require('express')
const router = express.Router();
const {User, Category, Quiz, Score } = require('../models');

//This is the route for the main page
router.get('/', async (req, res) => {
    try{ 
        // const activeUser = await User.findByPk(req.session.userID, {
        //     include: [{ model: Quiz,
        //         attributes:[
        //             'id',
        //             'title'
        //         ]},
        //         { model: Score,
        //         attributes: [
        //             'score',
        //             'quiz_id'
        //         ]}
        //     ]
        // });

        // console.log(activeUser)
        /*Do we need to query and models to go with the homepage?*/
      
        res.status(200).render('landing', {
          //activeUser
        }); /*what are we calling the handlebars home page?*/
    } catch (err) {
        res.status(500).json(err);
    };   
   
});

router.get('/account', async (req, res) => {
  try {
    const activeUser = await User.findByPk(req.session.user_id);
    res.status(200).render('account', {activeUser})
  }
  catch(err) {res.status(500).json(err)}
})

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
      res.status(200).render('categories', categoryData)
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
  
   res.render('quizzes', quizData);

    }
      catch (err) {
        res.status(500).json(err);
      }
});

// Get  chosen quiz
router.get('/quiz/:id', async (req, res) => {
  try {
    const quizData = await Quiz.findByPk(req.params.id, {
      include: [{ model: Score,
        attributes: ['score'],
        include: [{ model: User,
        attributes: ['user_name'] 
        }] 
      }]
    })
    .catch((err) => {
      res.json(err);
    });
    
    res.status(200).render('quiz', {
      quizData
    })
    

  }
    catch (err) {
      res.status(500).json(err);
    }
});

// Get high scores for chosen quiz
router.get('/quiz/:id/leaderboard/', async (req, res) => {
  try {

    const scoreData = await Score.findAll({
      where: { quiz_id: req.params.id },
      order: [ ['score', 'DESC'] ],
      include: [ 
        { model: Quiz,
        attributes: ['title'] },
        { model: User,
         attributes: ['user_name', 'power_level']}
        ],
        limit: 5
    })
    .catch((err) => {
      res.json(err);
    });
    
    // res.json(scoreData)

 res.render('leaderboard', scoreData)

  }
    catch (err) {
      res.status(500).json(err);
    }
});

//This is the route to call for the login page
router.get('/login', (req, res) => {
    try{ 
      res.status(200).render('login');
  } catch (err) {
      res.status(500).json(err);
  }; 
});

//This is the route to call to logout
router.post('/logout', (req, res) => {
  try{ 
    res.status(200).render('landing');
} catch (err) {
    res.status(500).json(err);
};
});

module.exports = router;