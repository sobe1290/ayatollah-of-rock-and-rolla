const router = require('express').Router();
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
          include: [{ model: Quiz,
          attributes:[
              'id',
              'title'
          ],
          include: [{ model: Score,
            attributes: [
              'score',
              'quiz_id'
            ]
          }]
        }],
      })
      res.json(userData)
  } catch(err) {console.log(err)}
});

//This is the route to call to create a user
router.post('/createuser', async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    // req.session.save(() => {
    //   req.session.loggedIn = true;

    //   res.status(200).json(dbUserData);
    // });
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//This is the route to call when trying to log in. needs username and password.
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;