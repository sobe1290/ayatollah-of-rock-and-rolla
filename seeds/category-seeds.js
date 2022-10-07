const Category = require('../models/Category')

const categoryData = [
    {
        title: 'Mad-Max: The Road Warrior'
    },
    {
        title: 'Star Wars: Rogue One'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData)

module.exports = seedCategories;