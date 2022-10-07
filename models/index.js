const User = require('./User');
const Quiz = require('./Quiz');
const Category = require('./Category');
const UserQuiz = require('./UserQuiz');
const Score = require('./Score');
const UserScore = require('./UserScore');

Quiz.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Quiz, {
    foreignKey: 'category_id'
});

Quiz.belongsToMany(User, {
    through: UserQuiz
});

User.belongsToMany(Quiz, {
    through: UserQuiz
});

Score.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Score, {
    foreignKey: 'user_id'
});

Score.belongsToMany(Quiz, {
    through: UserScore
});

Quiz.belongsToMany(Score, {
    through: UserScore
});


module.exports = {
    User,
    Quiz,
    Category,
    UserQuiz,
    Score
}