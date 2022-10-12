const Category = require('../models/Category')

const categoryData = [
    {
        title: 'Movies'
    },
    {
        title: 'Video Games'
    },
    {
        title: 'Books'
    },
    {
        title: 'Comic Books'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories;