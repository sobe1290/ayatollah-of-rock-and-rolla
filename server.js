// imports
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

//starting express
const app = express();
const PORT = process.env.PORT || 3001;

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);



// turning on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});