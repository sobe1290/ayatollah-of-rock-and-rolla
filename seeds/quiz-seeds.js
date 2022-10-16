const Quiz = require('../models/Quiz')

const quizData = [
    {
        title: 'Mad Max: Beyond Thunderdome',
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
        title: 'Star Wars : Rogue One',
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
            },
            {
                number: 3,
                question: 'What is the Alliance capital city?',
                answers: {
                        a: 'Stormwind',
                        b: 'Ironforge',
                        c: 'Darnassus',
                        d: 'Exodar'
                    },
                correct: 'Stormwind'
            },
            {
                number: 4,
                question: 'What is the Horde captial city?',
                answers: {
                        a: 'Thunderbluff',
                        b: 'Ogrimmar',
                        c: 'The Undercity',
                        d: "Quel'Thalas"
                    },
                correct: 'Ogrimmar'
            },
            {
                number: 5,
                question: 'Who was the antagonist of The Burning Crusade',
                answers: {
                        a: 'Ragnaros',
                        b: 'Grom Hellscream',
                        c: 'Illidan Stormrage',
                        d: 'Deathwing'
                    },
                correct: 'Illidan Stormrage'
            },
            {
                number: 6,
                question: 'What the the name of the protagonist from the Warcraft Movie?',
                answers: {
                        a: 'Arthas Menethil',
                        b: 'Anduin Lothar',
                        c: 'Jaina Proudmoore',
                        d: 'Anduin Wrynn'
                    },
                correct: 'Anduin Lothar'
            },
            {
                number: 7,
                question: 'Who is the broodmother of the Black Dragonflight?',
                answers: {
                        a: 'Sintharia',
                        b: 'Deathwing',
                        c: 'Sindragosa',
                        d: 'Onyxia'
                    },
                correct: 'Onyxia'
            },
            {
                number: 8,
                question: 'What is the starting zone of the Tauren?',
                answers: {
                        a: 'Mulgore',
                        b: 'Valley of Trials',
                        c: 'Eversong Woods',
                        d: 'Tirisfal Glades'
                    },
                correct: 'Mulgore'
            },
            {
                number: 9,
                question: 'What was the plague that nearly wiped out the World of Warcraft?',
                answers: {
                        a: 'Infected Wounds',
                        b: 'Curse of Agony',
                        c: 'Virulent Plague',
                        d: 'Corrupted Blood'
                    },
                correct: 'Corrupted Blood'
            },
            {
                number: 10,
                question: 'On what planet is most of the action in WoW set?',
                answers: {
                        a: 'Argus',
                        b: 'Azeroth',
                        c: 'Draenor',
                        d: 'Mardum'
                    },
                correct: 'Azeroth'
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
[            {
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
            }]
        ],
        category_id: 3
    },
    {
        title: 'Batman',
        questions: [
[            {
                number: 1,
                question: 'Who is Batmans Alter Ego?',
                answers: {
                        a: 'Bruce Banner',
                        b: 'Bruce Wayne',
                        c: 'Bruce the Shark',
                        d: 'Bruce Springstein'
                    },
                correct: 'Bruce Wayne'
            },
            {
                number: 2,
                question: "In Detective Comics #267, a magical Kobold from another dimension decides to help Batman fight crime--what is his name??",
                answers: {
                        a: 'Mr. Mxyztplk',
                        b: 'Martian Hunter',
                        c: 'Bat-Mite',
                        d: 'Bat-Dwarf'
                    },
                correct: 'Bat-Mite'
            }]
        ],
        category_id: 4
    },
    {
        title: 'Superman',
        questions: [
            {
                number: 1,
                question: "What is Superman's Dogs name?",
                answers: {
                        a: 'Krypto',
                        b: 'Bash',
                        c: 'Dynomutt',
                        d: 'K-9'
                    },
                correct: 'Krypto'
            },
            {
                number: 2,
                question: "Who is bald villain in Superman?",
                answers: {
                        a: 'Professor X',
                        b: 'Megamind',
                        c: 'Lex Luthor',
                        d: 'Krillin'
                    },
                correct: 'Lex Luthor'
            }
        ],
        category_id: 4
    },
];

const seedQuizzes = () => Quiz.bulkCreate(quizData)

module.exports = seedQuizzes;