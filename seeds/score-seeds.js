const Score = require('../models/Score');

const scoreData = [
    {
        score: 10,
        user_id: 1,
        quiz_id: 1,
    },
    {
        score: 4,
        user_id: 1,
        quiz_id: 2,
    },
    {
        score: 9,
        user_id: 2,
        quiz_id: 1,
    },
    {
        score: 10,
        user_id: 2,
        quiz_id: 2,
    },
    {
        score: 9,
        user_id: 2,
        quiz_id: 3,
    },
];

const seedScores = () => Score.bulkCreate(scoreData);

module.exports = seedScores;