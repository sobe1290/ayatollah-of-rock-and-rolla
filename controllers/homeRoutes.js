const router = require('express').Router();
const {/* Any Models? */} = require('../models');

//This is the route for the main page
router.get('/', async (req, res) => {
    try{ 

        /*Do we need to query and models to go with the homepage?*/
      
        res.render('homepage'); /*what are we calling the handlebars home page?*/
    } catch (err) {
        res.status(500).json(err);
    };   
   
  });

//This is the route to call for the sign up page
router.get('/signup', async (req, res) => {
    try{ 
        res.render('signup'); /*What are we calling the handlebars page for signup?*/
    } catch (err) {
        res.status(500).json(err);
    };  
    }
)

//This is the route to call for the login page
router.get('/login', (req, res) => {
    try{ 
      res.render('login'); /*What are we calling the handlebars page for login?*/
  } catch (err) {
      res.status(500).json(err);
  }; 
  });

//This is the route to call to logout
router.post('/logout', (req, res) => {
if (req.session.logged_in) {
    req.session.destroy(() => {
    res.status(204).end();
    });
} else {
    res.status(404).end();
}
});


  module.exports = router;