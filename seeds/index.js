const seedCategories = require('./category-seeds');
const seedQuizzes = require('./quiz-seeds');
const seedUsers = require('./user-seeds');
const seedUserQuiz = require('./userQuiz-seeds');
const seedScores = require('./score-seeds');
const seedUserScores = require('./userScore-seeds');

const sequelize = require('../config/connection')

const createnerdDB = async () => {
    await sequelize.query(
        'CREATE DATABASE IF NOT EXISTS nerdquiz_db;'
        // function(err, results) {
        //     if(err) {console.log(err)}
        //     else console.log(results)
        // }
    )
};

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n**//---- DB synced ----\\\\**\n');
    await seedCategories();
    console.log('\n**//---- Categories seeded ----\\\\**\n');
    await seedQuizzes();
    console.log('\n**//---- Quizzes fertilized ----\\\\**\n');
    await seedUsers();
    console.log('\n**//---- Users growing ----\\\\**\n');
    await seedUserQuiz();
    console.log('\n**//---- User Quizes ready for harvest ----\\\\**\n');
    await seedScores();
    console.log('\n**//---- Scores made for a bountiful harvest!! ----\\\\**\n')
    await seedUserScores();
    console.log('\n**//---- User Scores for better health. ----\\\\**\n')
    process.exit(0)
};

createnerdDB();
seedAll();