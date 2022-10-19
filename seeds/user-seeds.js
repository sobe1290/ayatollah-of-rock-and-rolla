const User = require('../models/User')

const userData = [
    {
        user_name: 'Lord Humungus',
        email: 'Lord@Humungus.com',
        password: 'password',
        power_level: 9800
    },
    {
        user_name: 'Jedediah',
        email: 'gyro@captain.com',
        password: 'password',
        power_level: 4200
    },
    {
        user_name: 'MaxRockatansky',
        email: 'mad@max.com',
        password: 'password',
        power_level: 2600
    },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true})

module.exports = seedUsers;