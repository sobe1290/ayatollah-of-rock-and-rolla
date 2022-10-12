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
        category_id: 1
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
        category_id: 1
    },
    {
        title: 'World of Warcraft',
        questions: [
            {
                number: 1,
                question: 'What was the first WoW expansion?',
                answers: {
                        a: 'Wrath of the Lich King',
                        b: 'The Burning Crusade',
                        c: 'Mists of Pandaria',
                        d: 'Shadowlands'
                    },
                correct: 'The Burning Crusade'
            },
            {
                number: 2,
                question: "What class was Leeroy Jenkins?",
                answers: {
                        a: 'Mage',
                        b: 'Warlock',
                        c: 'Warrior',
                        d: 'Paladin'
                    },
                correct: 'Warrior'
            }
        ],
        category_id: 2
    },
    {
        title: 'Legend of Zelda',
        questions: [
            {
                number: 1,
                question: 'What is the name of the main character?',
                answers: {
                        a: 'Zelda',
                        b: 'Link',
                        c: 'Korok',
                        d: 'Ganondorf'
                    },
                correct: 'Link'
            },
            {
                number: 2,
                question: "What is the name of Link's horse in Ocarina of Time?",
                answers: {
                        a: 'Shadowfax',
                        b: 'Pegasus',
                        c: 'Malon',
                        d: 'Epona'
                    },
                correct: 'Warrior'
            }
        ],
        category_id: 2
    },
    {
        title: 'Lord of the Rings',
        questions: [
            {
                number: 1,
                question: 'Where did the battle of Hornburg take place?',
                answers: {
                        a: 'Hornburg',
                        b: 'The Shire',
                        c: 'Helms Deep',
                        d: 'The Southlands'
                    },
                correct: 'Link'
            },
            {
                number: 2,
                question: "When is Frodo and Bilbo's birthday?",
                answers: {
                        a: 'Oct 5th',
                        b: 'Sept 22nd',
                        c: 'Dec 22nd',
                        d: 'May 9th'
                    },
                correct: 'Sept 22nd'
            }
        ],
        category_id: 3
    },
    {
        title: 'Dune',
        questions: [
            {
                number: 1,
                question: 'What is the name of the giant worms from Arrakis?',
                answers: {
                        a: 'Fish Speakers',
                        b: 'Bene Gesserit',
                        c: 'Harkonnen',
                        d: 'Shai-Hulud'
                    },
                correct: 'Shai-Halud'
            },
            {
                number: 2,
                question: "Who is the main character?",
                answers: {
                        a: 'Reverend Mother Gaius Helen Mohiam',
                        b: 'Paul Atreides',
                        c: 'Gurney Halleck',
                        d: 'Duke Leto Atreides'
                    },
                correct: 'Paul Atreides'
            }
        ],
        category_id: 3
    },
];

const seedQuizzes = () => Quiz.bulkCreate(quizData)

module.exports = seedQuizzes;