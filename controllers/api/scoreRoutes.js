const router = require('express').Router();
const { User, Quiz, Score, Category } = require('../../models');

//None of these routes currently utilize authentication. Which ones do we need to add authentication to (withAuth)?

//This is the route to call if you need to get all the scores
router.get('/', async (req, res) => {
    try {
      const userData = await Score.findAll({

        include: [
            { model: Quiz,
                attributes: ['title']},
            { model: User,
                attributes: ['user_name', 'power_level'],
            }
        ]
        // { model: User,
        //   attributes: ['user_name']
        // }],
      }).catch((err) => {
        res.json(err);
      });

      res.json(userData)

      // const scores = scoreData.map((score) => score.get({ plain: true }));
      // res.render('top scores', {  /*what are we rendering with this route?*/
      //   scores,
      //   logged_in: req.session.logged_in,
      // });
    } catch (err) {
      res.status(500).json(err);
    }
});

//This is the route to call to add a score (required body parts: score, user_id, quiz_id)
router.post('/', async (req, res) => {
    try {
        const scoreData = await Score.create({
        score: req.body.score,
        user_id: req.body.user_id,
        quiz_id: req.body.quiz_id,
        });
    
        req.session.save(() => {
        req.session.loggedIn = true;
    
        res.status(200).json(scoreData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//This is the route to call to delete a score (required url parameter: id)
router.delete('/:id', (req, res) => {
    Score.destroy({
        where: {
        id: req.params.id, /*Do we want it in parameters or body? its in parameters on this one*/
        },
    })
        .then((thisScore) => {
        if (!thisScore) {
            res.status(404).json({ message: 'No score found with this id' });
            return;
        }
        res.json(thisScore);
        })
        .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        });
});

//This is the route to call to update a score (required body parts: id, score, user_id, quiz_id)
router.put('/', (req, res) => {
    Score.update({
        score: req.body.score,
        user_id: req.body.user_id,
        quiz_id: req.body.quiz_id,
    }, {
        where: {
        id: req.body.id, /*Do we want it in parameters or body? its in body on this one*/
        },
    }).then((updateScoreData) => {
        if (!updateScoreData) {
        res.status(404).json({ message: 'No score found with this id' });
        return;
        }
        res.json(updateScoreData);
    })
        .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        });
});

module.exports = router;