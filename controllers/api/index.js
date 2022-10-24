const router = require('express').Router();
const userRoutes = require('./userRoutes');
const quizRoutes = require('./quizRoutes');
const categoryRoutes = require('./categoryRoutes');
const scoreRoutes = require('./scoreRoutes');
const userQuizRoutes = require('./userQuizRoutes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/categories', categoryRoutes);
router.use('/score', scoreRoutes);
router.use('/userquiz', userQuizRoutes);

module.exports = router;