const express = require('express')
const router = express.Router();
const {User, Category, Quiz, Score } = require('../models');
const auth = require('../utils/auth')

//This is the route for the main page
router.get('/', async (req, res) => {
    try{ 
     
        res.status(200).render('landing'); 
    } catch (err) {
        res.status(500).json(err);
    };   
   
});

router.get('/account',auth, async (req, res) => {
  try {
    const activeUser = await User.findByPk(req.session.user_id, {
      include: [{ model: Score,
        order: [ ['createdAt', 'DESC'] ],
        include: { model: Quiz,
          attributes: [
            'title'
          ],
          include: { model: Category }
        }
      }],
      limit: 5
    });
    res.status(200).render('account', { activeUser }
    )
  }
  catch(err) {res.status(500).json(err)}
})

//This is the route to call for the sign up page
router.get('/signup', async (req, res) => {
    try{ 
        res.render('signup'); 
    } catch (err) {
        res.status(500).json(err);
    };  
});

// get all categories to render to page.
router.get('/categories', auth, async (req, res) => {
    try {
      const categoryData = await Category.findAll({
      }).catch((err) => {
        res.json(err);
      });

      // console.log(categoryData)
      res.status(200).render('categories', { categoryData })
    } catch (err) {
      res.status(500).json(err);
    }
});

// Gets top 10 users sorted by power level and renders leaderboard page
router.get('/leaderboard', async (req, res) => {
  try {
    const topUsers = await User.findAll({
      order: [ ['power_level', 'DESC'] ],
      attributes: [
        'user_name',
        'power_level'
      ],
      limit: 10
    }).catch((err) => {
      res.json(err);
    });
    res.status(200).render('leaderboard', { topUsers })
  }
  catch(err) {res.status(500).json(err)}
})

// Get all quizzes under chosen category.
router.get('/categories/:id', auth, async (req, res) => {
    try {
      const quizData = await Quiz.findAll({
        where: {
          category_id: req.params.id
        },
        attributes: [
          'title',
          'description',
          'id'
        ],
        include: [{ model: Category,
          attributes:['title']
        }]
      })
      .catch((err) => {
        res.json(err);
      });
  
   res.render('quizzes', { quizData });

    }
      catch (err) {
        res.status(500).json(err);
      }
});

// Get  chosen quiz
router.get('/quiz/:id', auth, async (req, res) => {
  try {
    const quizData = await Quiz.findByPk(req.params.id, {
      include: [{ model: Score,
        attributes: ['score']
      }]
    })

    const activeUser = await User.findByPk(req.session.user_id, {
      attributes: ['power_level']
    })
    .catch((err) => {
      res.json(err);
    });
    
    res.status(200).render('quiz', {
      quizData, 
      user_id: req.session.user_id,
      activeUser
       
    })
    

  }
    catch (err) {
      res.status(500).json(err);
    }
});

router.get('/create', auth, async (req, res) => {
  try {
    const categoryData = await Category.findAll({
    }).catch((err) => {
      res.json(err);
    });
    res.status(200).render('quizCreate', { categoryData })
  }
    catch (err) {
      res.status(500).json(err);
    }
});

// Get high scores for chosen quiz
router.get('/quiz/:id/leaderboard', auth, async (req, res) => {
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

    const userScore = await Score.findAll({
      order: [ [ 'createdAt', 'DESC' ] ],
      include: { model: User },
      limit: 1
    })

    .catch((err) => {
      res.json(err);
    });

 res.render('scoreScreen', { scoreData, userScore } )

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
router.get('/logout', (req, res) => {
  try{ 
    res.status(200).render('landing');
} catch (err) {
    res.status(500).json(err);
};
});


module.exports = router;