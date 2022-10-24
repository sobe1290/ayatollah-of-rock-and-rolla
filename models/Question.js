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
            // onDelete:'CASCADE'
        },
        questions: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Quiz,
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Category,
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: true,
        modelName: 'question',
        onDelete: 'CASCADE'
    },
)

module.exports = Question