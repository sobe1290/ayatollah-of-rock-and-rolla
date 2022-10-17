const { UserQuiz, User, Score, Quiz, Category } = require('../../models');
const router = require('express').Router();

//Dont know what routes need to go here yet. Need to discuss with group

router.post('/', async (req, res) => {
    try{
        const userQuizData = await UserQuiz.create({
            user_id: req.body.user_id,
            quiz_id: req.body.quiz_id
        }).catch((err) => {res.status(400).json(err)})
        res.status(200).json(userQuizData)
    }
    catch(err) {res.status(500).json(err)}
})

module.exports = router;