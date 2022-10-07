// Only here to test the api calls to ensure associations pull right. 
// Delete when routes formally established

const express = require('express');
const sequelize = require('./config/connection');
const { User, Quiz, Category, UserQuiz, Score } = require('./models')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})


app.get('/api/', async (req, res) => {
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

app.get('/api/quiz', async (req, res) => {
    try {
        const userData = await Quiz.findAll({
            // include: [{ model: Quiz }],
        })
        res.json(userData)
    } catch(err) {res.status(500).json(err)}
});

app.get('/api/category', async (req, res) => {
    try {
        const userData = await Category.findAll({
            include: [{ model: Quiz,
            attributes: ['title']
            }],
        })
        res.json(userData)
    } catch(err) {res.status(500).json(err)}
});