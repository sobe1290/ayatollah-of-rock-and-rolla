const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quizRoutes = require('/quizRoutes');
const categoryRoutes = require('/categoryRoutes.js');
const scoreRoutes = require('/scoreRoutes');
const userQuizRoutes = require('/userQuizRoutes');
const userScoreRoutes = require('/userScoreRoutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/category', categoryRoutes);
router.use('/score', scoreRoutes);
router.use('/userquiz', userQuizRoutes);
router.use('/userscore', userScoreRoutes);

module.exports = router;