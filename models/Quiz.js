const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Category');

class Quiz extends Model {};

Quiz.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        questions: {
            type: DataTypes.JSON,
            allowNull: false,
            // get() {
            //     return JSON.parse(this.getDataValue('questions'))
            // },
            // set(value) {
            //     return this.setDataValue('questions', JSON.stringify(value))
            // }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Category,
                key: 'id'
            }
        },
        // score_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: true,
        modelName: 'quiz',
    },
)

module.exports = Quiz