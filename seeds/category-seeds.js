const Category = require('../models/Category')

const categoryData = [
    {
        title: 'Mad-Max'
    },
    {
        title: 'Star Wars'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories;