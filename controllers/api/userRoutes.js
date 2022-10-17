const express = require('express');
const router = express.Router();
const { User, Quiz, Score, Category } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Quiz,
            attributes:[
                'id',
                'title'
            ]},
            { model: Score,
            attributes: [
                'score',
                'quiz_id'
            ]}
        ],
        })
        res.json(userData)
    } catch(err) {console.log(err)}
});

//GETs specific user by pk
router.get('/:id', async (req, res) => {
  try {
      const userData = await User.findByPk(req.params.id, {
        include: [{ model: Score,
          order: [ ['createdAt', 'DESC'] ],
          include: { model: Quiz,
            attributes: [
              'title'
            ],
            include: { model: Category }
          }
        }],
      })
      res.json(userData)
  } catch(err) {console.log(err)}
});

//This is the route to call to create a user
router.post('/createuser', async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.usernameElement,
      password: req.body.passwordElement,
      email: req.body.emailElement,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.user_name;
      req.session.powerLevel = dbUserData.power_level;
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//This is the route to call when trying to log in. needs username and password.
router.post('/login', async (req, res) => {
    
  try {
    const userData = await User.findOne({ 
      where: { 
        user_name: req.body.username 
      } 
    });
    console.log(userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.user_name;
      req.session.powerLevel = userData.power_level;
      req.session.loggedIn = true;
      console.log(req.session)
    res.status(200).json(userData);
    });
  } catch (err) {
    res.status(420).json(console.log(err));
  }
});

// PUT route for updating power_level
router.put('/update', async (req, res) => {
  try {
    const updatedUser = await User.update({
      power_level: req.body.power_level,
    },
    {
      where: {id: req.body.user_id}
    }).catch((err) => {
      res.json(err);     
    });
    if (!updatedUser) {
      res.status(400).json({message: "I'm honestly just as confused as you are."})
    }
    res.status(200).json(updatedUser)
  } catch(err) {res.status(500).json(err)}
});

//This is the route to call to logout
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
      await req.session.destroy(() => {
        res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});

module.exports = router;