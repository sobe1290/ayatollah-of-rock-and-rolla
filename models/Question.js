const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Category');
const Quiz = require('./Quiz');

class Question extends Model {};

Question.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        quest: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete: 'set null',
            references: {
                model: 'quizzes',
                key: 'id'
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Category,
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'quest',
    },
)

module.exports = Question