const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Category');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(pw) {
        return bcrypt.compareSync(pw, this.password)
    }
};

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.JSON,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        power_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        // completed_quizzes: {
        //     type: DataTypes.JSON,
        //     allowNull: false,
        // }
    },
    {
        hooks: {
            async beforeCreate(userData) {
                userData.password = await bcrypt.hash(userData.password, 10);
                return userData;
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: false,
        underscored: true,
        modelName: 'user',
    },
)

module.exports = User