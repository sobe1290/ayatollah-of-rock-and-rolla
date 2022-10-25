const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');
const categoryRoutes = require('./categoryRoutes');
const scoreRoutes = require('./scoreRoutes');
const userQuizRoutes = require('./userQuizRoutes');
const questions = require('./Questionroutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/categories', categoryRoutes);
router.use('/score', scoreRoutes);
router.use('/userquiz', userQuizRoutes);
router.use('/questions', questions);

module.exports = router;