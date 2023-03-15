const User = require('./User');
const Quiz = require('./Quiz');
const Category = require('./Category');
const UserQuiz = require('./UserQuiz');
const Score = require('./Score');
const Question = require('./Question');

Quiz.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Category.hasMany(Quiz, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Quiz.belongsToMany(User, {
    through: UserQuiz,
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
});

User.belongsToMany(Quiz, {
    through: UserQuiz,
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Score.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Score, {
    foreignKey: 'user_id'
});

Score.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE',
});

Quiz.hasMany(Score, {
    foreignKey: 'quiz_id',
    onDelete: 'CASCADE'
});

User.hasMany(Quiz, {
    foreignKey: 'creator_id',
    constraints: false
});

Quiz.belongsTo(User, {
    foreignKey: 'creator_id',
    constraints: false
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id'
})

Question.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = {
    User,
    Quiz,
    Category,
    UserQuiz,
    Score
}