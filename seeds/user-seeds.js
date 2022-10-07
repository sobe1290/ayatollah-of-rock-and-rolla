const User = require('../models/User')

const userData = [
    {
        user_name: 'Lord Humungus',
        email: 'Lord@Humungus.com',
        password: 'password',
        power_level: 12
    },
    {
        user_name: 'Jedediah',
        email: 'gyro@captain.com',
        password: 'password',
        power_level: 54
    },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true})

module.exports = seedUsers;