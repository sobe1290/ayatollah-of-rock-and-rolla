const mysql = require('mysql2');
require('dotenv').config();

// connects to db and created db if not exists
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

connection.query( 
    'DROP DATABASE IF EXISTS nerdquiz_db',
    function(err, results) {
        if(err) {console.log(err)}
        else console.log(results)
    }
);
connection.query( 
    'CREATE DATABASE IF NOT EXISTS nerdquiz_db',
    function(err, results) {
        if(err) {console.log(err)}
        else console.log(results)
    }
);
connection.end(); // ends sql connection to create db