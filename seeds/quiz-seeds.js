const Quiz = require('../models/Quiz')

const quizData = [
    {
        title: 'Beyond Thunderdome',
        questions: [
            {
                number: 1,
                question: 'Who plays Auntie Entity?',
                answers: {
                        a: 'Tina Turner',
                        b: 'Rebel Wilson',
                        c: 'Shania Twain',
                        d: 'Halle Berry'
                    },
                correct: 'Tina Turner'
            },
            {
                number: 2,
                question: 'What is the name of the city where the Thunderdome is located?',
                answers: {
                        a: 'Methane Farm',
                        b: 'The Citadel',
                        c: 'Bartertown',
                        d: 'Chicago'
                    },
                correct: 'Bartertown'
            }
        ],
        category_id: 1
    },
    {
        title: 'Rogue One',
        questions: [
            {
                number: 1,
                question: 'What is the name of the primary protaginist',
                answers: {
                        a: 'Chewbacca',
                        b: 'Han Solo',
                        c: 'Jyn',
                        d: 'Boba Fett'
                    },
                correct: 'Jyn'
            },
            {
                number: 2,
                question: "What type of stolen Imperial ship earns the call sign 'Rogue One'?",
                answers: {
                        a: 'Star Destroyer',
                        b: 'Cargo shuttle',
                        c: 'tie Fighter',
                        d: 'AT-ST'
                    },
                correct: 'Cargo Shuttle'
            }
        ],
        category_id: 2
    },
    {
        title: 'Star Wars Worlds',
        questions: [
            {
                number: 1,
                question: 'What planet is Luke Skywalker from?',
                answers: {
                        a: 'Earth',
                        b: 'Tatooine',
                        c: 'Coruscant',
                        d: 'Dagobah'
                    },
                correct: 'Tatooine'
            },
            {
                number: 2,
                question: "What planet is the center of the Glactic Republic?",
                answers: {
                        a: 'Coruscant',
                        b: 'Naboo',
                        c: 'Hoth',
                        d: 'Bespin'
                    },
                correct: 'Coruscant'
            }
        ],
        category_id: 2
    }
];

const seedQuizzes = () => Quiz.bulkCreate(quizData)

module.exports = seedQuizzes;