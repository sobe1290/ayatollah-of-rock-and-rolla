const router = require('express').Router();
const { /* Insert the Models Jacob Created then*/} = require('../models');

router.get('/', withAuth, async (req, res) => {
    try{ 
      
    } catch (err) {
        res.status(500).json(err);
    };   
   
  });

router.get('/signup', async (req, res) => {
    try{ 
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    };  
    }
)

router.get('/login', (req, res) => {
    try{ 
      res.render('login');
  } catch (err) {
      res.status(500).json(err);
  }; 
  });

  module.exports = router;