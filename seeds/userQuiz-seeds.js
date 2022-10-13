const UserQuiz = require('../models/UserQuiz');

const userQuizData = [
    {
        user_id: 1,
        quiz_id: 1,
    },
    {
        user_id: 2,
        quiz_id: 1,
    },
    {
        user_id: 1,
        quiz_id: 1,
    },
    {
        user_id: 1,
        quiz_id: 1,
    },
    {
        user_id: 2,
        quiz_id: 1,
    },
    {
        user_id: 1,
        quiz_id: 2,
    },
    {
        user_id: 2,
        quiz_id: 1,
    },
    {
        user_id: 2,
        quiz_id: 2,
    },
    {
        user_id: 2,
        quiz_id: 3,
    },
];

const seedUserQuiz = () => UserQuiz.bulkCreate(userQuizData);

module.exports = seedUserQuiz;