const seedCategories = require('./category-seeds');
const seedQuizzes = require('./quiz-seeds');
const seedUsers = require('./user-seeds');
const seedUserQuiz = require('./userQuiz-seeds');
const seedScores = require('./score-seeds');
const seedQuestions = require('./question-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: false });
    console.log('\n**//---- DB synced ----\\\\**\n');
    await seedCategories();
    console.log('\n**//---- Categories seeded ----\\\\**\n');
    await seedUsers();
    console.log('\n**//---- Users fertilized ----\\\\**\n');
    await seedQuizzes();
    console.log('\n**//---- Quizzes growing ----\\\\**\n');
    await seedUserQuiz();
    console.log('\n**//---- User Quizes ready for harvest ----\\\\**\n');
    await seedScores();
    console.log('\n**//---- Scores made for a bountiful harvest!! ----\\\\**\n')
    await seedQuestions();
    console.log('\n**//---- Questions for better health. ----\\\\**\n')
    process.exit(0);
};

seedAll();