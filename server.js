// END TEST ROUTES 
// VVV SHEPS WORK BELOW VVV

// imports

const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const sessionsecret = process.env.SESSION_SECRET


//starting express
const app = express();
const PORT = process.env.PORT || 3001;

//handlebars
const handlebars = expressHandlebars.create({ helpers });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//session
const sess = {
  secret: 'powertrip',
  cookie: {
      maxAge: 20 * 60 * 1000,
      resave: true
  },
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize,
  }),
};

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(routes);

// turning on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})