const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Category');
const Question = require('./Question');
const User = require('./User');

class Quiz extends Model {};

Quiz.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        questions: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
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
        hooks: {
            afterCreate(quizData) {
                const questionData = []
                for (let i=0; i<quizData.questions.length; i++) {
                    let obj = {
                        quest: quizData.questions[i],
                        quiz_id: quizData.id,
                        category_id: quizData.category_id
                    }
                    questionData.push(obj)
                }
                Question.bulkCreate(questionData)
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: true,
        modelName: 'quiz',
        onDelete: 'CASCADE'
    },
)

module.exports = Quiz