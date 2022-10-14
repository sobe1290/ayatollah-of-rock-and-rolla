//connects to SQL database specified in .env file.

require('dotenv').config();
const Sequelize = require('sequelize');
// const mysql = require('mysql2');

// // connects to db and created db if not exists
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
// });

// connection.query( 
//     'CREATE DATABASE IF NOT EXISTS nerdquiz_db',
//     function(err, results) {
//         if(err) {console.log(err)}
//         else console.log(results)
//     }
// );
// connection.end(); // ends sql connection to create db

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
else {
    sequelize = new Sequelize (
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        });
}

module.exports = sequelize;