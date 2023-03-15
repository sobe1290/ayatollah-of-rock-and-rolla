const router = require('express').Router();
const { User, Quiz, Score, Category } = require('../../models');
const Question = require('../../models/Question');

//None of these routes currently utilize authentication. Which ones do we need to add authentication to (withAuth)?

// GETs all available quizzes listing their titles only.
router.get('/', async (req, res) => {
    try {
      const questionData = await Question.findAll({
        include: [
          { model: Quiz,
            attributes: ['title']
          },
          { model: Category,
            attributes: ['title']
          },
        ]
      }).catch((err) => {
        res.json(err);
      });
      res.status(200).json(questionData)

    } catch (err) {
      res.status(500)
      console.log(err);
    }
});

router.post('/', async (req, res) => {
    try{
        const questionData = await Question.create({
            questions: req.body.questions,
            category_id: req.body.category_id
        });
        res.status(200).json(questionData)
    } catch (err) {res.status(500).json(err)}
})

module.exports = router;