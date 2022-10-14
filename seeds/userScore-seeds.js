const UserScore = require('../models/UserScore');

const userScoreData = [
    {
        user_id: 1,
        quiz_id: 1,
        score_id: 1,
    },
    {
        user_id: 1,
        quiz_id: 2,
        score_id: 1,
    },
    {
        user_id: 2,
        quiz_id: 1,
        score_id: 1,
    },
    {
        user_id: 2,
        quiz_id: 1,
        score_id: 1,
    },
    {
        user_id: 2,
        quiz_id: 1,
        score_id: 5,
    },
    {
        user_id: 1,
        quiz_id: 2,
        score_id: 6,
    },
    {
        user_id: 2,
        quiz_id: 1,
        score_id: 7,
    },
    {
        user_id: 2,
        quiz_id: 2,
        score_id: 8,
    },
    {
        user_id: 2,
        quiz_id: 3,
        score_id: 9,
    },
];

const seedUserScores = () => UserScore.bulkCreate(userScoreData);

module.exports = seedUserScores;