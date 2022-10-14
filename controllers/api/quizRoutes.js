const router = require('express').Router();
const { User, Quiz, Score, Category } = require('../../models');

//None of these routes currently utilize authentication. Which ones do we need to add authentication to (withAuth)?

// GETs all available quizzes listing their titles only.
router.get('/', async (req, res) => {
    try {
      const quizData = await Quiz.findAll({
        attributes: ['title']
      }).catch((err) => {
        res.json(err);
      });

      res.json(quizData)

      // const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));
      // res.render('quiz', { //what are we rendering with this route?
      //   quizzes,
      //   logged_in: req.session.logged_in,
      // });
    } catch (err) {
      res.status(500)
      console.log(err);
    }
});

// GETS specific quiz by pk
router.get('/:id', async (req, res) => {
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

// GETs all quiz titles by category id
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
      // include: [{ model: Score,
      //   attributes: ['score'],
      //   include: [{ model: User,
      //   attributes: ['user_name'] 
      //   }] 
      // }]
    })
    .catch((err) => {
      res.json(err);
    });

    res.json(quizData)

  }
    catch (err) {
      res.status(500).json(err);
    }
});

// GETs scores for all quizzes
router.get('/highscores', async (req, res) => {
  try {
    const hsData = await Quiz.findAll({
      attributes: ['title'],
      include: [{ model: Score,
        include:[{ model: User,
        attributes: ['user_name'] 
      }] 
    }]
    }).catch((err) => {
      res.json(err);
    });

    res.json(hsData)

    // const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));
    // res.render('quiz', { //what are we rendering with this route?
    //   quizzes,
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

//This is the route to call to add a quiz (Required body part: title, questions, category_id)
router.post('/', async (req, res) => {
  try {
    const quizData = await Quiz.create({
      title: req.body.title,
      questions: req.body.questions, /* Formatting since they are objects containing objects? 
      BUILD QUESTIONS AS OBJECTS WITH ANSWERS AS NESTED OBJECTS -- NEXT THE QUESTION OBJECT 
      INTO A QUIZ OBJECT WITH A TITLE KEY:VALUE PAIR*/
      category_id: req.body.category_id,
    });

    // req.session.save(() => {
    //   req.session.loggedIn = true;

    //   res.status(200).json(quizData);
    // });

    res.status(200).json(quizData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//This is the route to call to delete a quiz (required url parameter: id)
router.delete('/:id', (req, res) => {
  Quiz.destroy({
    where: {
      id: req.params.id, /*Do we want it in parameters or body? its in parameters on this one*/
    },
  })
    .then((thisQuiz) => {
      if (!thisQuiz) {
        res.status(404).json({ message: 'No quiz found with this id' });
        return;
      }
      res.json(thisQuiz);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//This is the route to call to update a quiz (Required body part: id, title, questions, category_id)
router.put('/', (req, res) => {
  Quiz.update({
      title: req.body.title,
      questions: req.body.questions, /* Formatting since they are objects containing objects? */
      category_id: req.body.category_id,
  }, {
    where: {
      id: req.body.id, /*Do we want it in parameters or body? its in body on this one*/
    },
  }).then((updateQuizData) => {
    if (!updateQuizData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(updateQuizData);
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;