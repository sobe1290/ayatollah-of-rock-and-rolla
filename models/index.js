const User = require('./User');
const Quiz = require('./Quiz');
const Category = require('./Category');
const userQuiz = require('./UserQuiz');
const UserQuiz = require('./UserQuiz');

Quiz.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Quiz, {
    foreignKey: 'category_id'
});

Quiz.belongsToMany(User, {
    through: UserQuiz
})