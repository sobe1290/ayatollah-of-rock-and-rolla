const router = require('express').Router();
const { Category, Quiz, User } = require('../../models');

//None of these routes currently utilize authentication. Which ones do we need to add authentication to (withAuth)?

//This is the route to call if you need to get all the quizzes
router.get('/', async (req, res) => {
    try {
      const quizData = await Quiz.findAll({
        //Include any other tables?
      }).catch((err) => {
        res.json(err);
      });
      const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));
      res.render('quiz' /*what are we rendering with this route?*/, {
        quizzes,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//This is the route to call to add a quiz (Required body part: title, questions, category_id)
router.post('/', async (req, res) => {
  try {
    const quizData = await Quiz.create({
      title: req.body.title,
      questions: req.body.title, /* Formatting since they are objects containing objects? */
      category_id: req.body.category_id,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(quizData);
    });
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
      questions: req.body.title, /* Formatting since they are objects containing objects? */
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