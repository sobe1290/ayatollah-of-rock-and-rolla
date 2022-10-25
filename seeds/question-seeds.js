const Question = require('../models/Question')

const questionData = [
    {
      questions: {
        number:1,
        question:"Who plays Auntie Entity?",
        answers:{a:"Tina Turner",b:"Rebel Wilson",c:"Shania Twain",d:"Halle Berry"},
        correct:"Tina Turner"},
      quiz_id:1,
      category_id:1,
    },
    {
      questions: {number:2,question:"What is the name of the city where the Thunderdome is located?",answers:{a:"Methane Farm",b:"The Citadel",c:"Bartertown",d:"Chicago"},correct:"Bartertown"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:3,question:"Some of the things Nightrider yells over the radio are lyrics from what band?",answers:{a:"AC/DC",b:"Metallica",c:"Black Sabbath",d:"Poison"},correct:"AC/DC"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:4,question:"What was the name of Immortan Joe's car?",answers:{a:"Buggy #9",b:"Plymouth Rock",c:"War Rig",d:"The Gigahorse"},correct:"The Gigahorse"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:5,question:"What was the name of Charlize Theron's character in Fury Road?",answers:{a:"Toast the Knowing",b:"Imperator Furiosa",c:"The Splendid Angharad",d:"The Dag"},correct:"Imperator Furiosa"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:6,question:"What kind of car did Max drive in the original 1973 movie?",answers:{a:"Chevrolet Chevelle SS",b:"Mercury Montego GT",c:"Plymouth Scamp 340",d:"Ford XB GT Falcon"},correct:"Ford XB GT Falcon"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:7,question:"What do the War Boys huff on the road to Valhalla?",answers:{a:"Chrome Spray Paint",b:"Narcan",c:"Meth-in-a-can",d:"Stimpack"},correct:"Chrome Spray Paint"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:8,question:"How many lines of dialogue does Mel Gibson have in The Road Warrior?",answers:{a:"76",b:"22",c:"16",d:"54"},correct:"16"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:9,question:"How did War Boy, Nux, refer to Max?",answers:{a:"Slave",b:"Body Bag",c:"Blood Bag",d:"Meat"},correct:"Blood Bag"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:10,question:"In Beyond Thunderdome, which of these was not an outcome on the Wheel?",answers:{a:"Death",b:"Acquittal",c:"Aunty's Choice",d:"Monetary Fine"},correct:"Monetary Fine"},
      quiz_id: 1,
      category_id: 1,
    },
    {
      questions: {number:1,question:"What planet is Luke Skywalker from?",answers:{a:"Earth",b:"Tatooine",c:"Coruscant",d:"Dagobah"},correct:"Tatooine"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:2,question:"What planet is the center of the Glactic Republic?",answers:{a:"Coruscant",b:"Naboo",c:"Hoth",d:"Bespin"},correct:"Coruscant"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:3,question:"What is the name of the primary protaginist in Rogue One?",answers:{a:"Chewbacca",b:"Han Solo",c:"Jyn",d:"Boba Fett"},correct:"Jyn"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:4,question:"What type of stolen Imperial ship earns the call sign 'Rogue One'?",answers:{a:"Star Destroyer",b:"Cargo shuttle",c:"tie Fighter",d:"AT-ST"},correct:"Cargo Shuttle"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:5,question:"Which villain wields the two sided light-saber?",answers:{a:"Darth Vader",b:"Ajunta Pall",c:"Darth Bane",d:"Darth Maul"},correct:"Darth Maul"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:6,question:"What is Boba Fett?",answers:{a:"Rogue Bounty Hunter",b:"Stormtrooper",c:"Rebel Pilot",d:"Wookie"},correct:"Rogue Bounty Hunter"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:7,question:"Who trained Obi-Wan?",answers:{a:"Mace Windu",b:"Luke Skywalker",c:"Qui-Gon Jinn",d:"He trained himself"},correct:"Qui-Gon Jinn"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:8,question:"What planet are Wookiees from?",answers:{a:"Kashyyyk",b:"Dantooine",c:"Dagobah",d:"Naboo"},correct:"Kashyyyk"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:9,question:"What do fans speculate Jar Jar Bink is?",answers:{a:"God",b:"Bounty Hunter",c:"Jedi",d:"Sith Lord"},correct:"Sith Lord"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:10,question:"What is Kylo Ren's real name?",answers:{a:"Zorii Bliss",b:"Ben Solo",c:"Bren Derlin",d:"Maz Kanata"},correct:"Ben Solo"},
      quiz_id: 2,
      category_id: 1,
    },
    {
      questions: {number:1,question:"What was the first WoW expansion?",answers:{a:"Wrath of the Lich King",b:"The Burning Crusade",c:"Mists of Pandaria",d:"Shadowlands"},correct:"The Burning Crusade"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:2,question:"What class was Leeroy Jenkins?",answers:{a:"Mage",b:"Warlock",c:"Warrior",d:"Paladin"},correct:"Warrior"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:3,question:"What is the Alliance capital city?",answers:{a:"Stormwind",b:"Ironforge",c:"Darnassus",d:"Exodar"},correct:"Stormwind"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:4,question:"What is the Horde captial city?",answers:{a:"Thunderbluff",b:"Ogrimmar",c:"The Undercity",d:"Quel'Thalas"},correct:"Ogrimmar"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:5,question:"Who was the antagonist of The Burning Crusade",answers:{a:"Ragnaros",b:"Grom Hellscream",c:"Illidan Stormrage",d:"Deathwing"},correct:"Illidan Stormrage"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:6,question:"What the the name of the protagonist from the Warcraft Movie?",answers:{a:"Arthas Menethil",b:"Anduin Lothar",c:"Jaina Proudmoore",d:"Anduin Wrynn"},correct:"Anduin Lothar"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:7,question:"Who is the broodmother of the Black Dragonflight?",answers:{a:"Sintharia",b:"Deathwing",c:"Sindragosa",d:"Onyxia"},correct:"Onyxia"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:8,question:"What is the starting zone of the Tauren?",answers:{a:"Mulgore",b:"Valley of Trials",c:"Eversong Woods",d:"Tirisfal Glades "},correct:"Mulgore"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:9,question:"What was the plague that nearly wiped out the World of Warcraft?",answers:{a:"Infected Wounds",b:"Curse of Agony",c:"Virulent Plague",d:"Corrupted Blood"},correct:"Corrupted Blood"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:10,question:"On what planet is most of the action in WoW set?",answers:{a:"Argus",b:"Azeroth",c:"Draenor",d:"Mardum"},correct:"Azeroth"},
      quiz_id: 3,
      category_id: 2,
    },
    {
      questions: {number:1,question:"What is the name of the main character?",answers:{a:"Zelda",b:"Link",c:"Korok",d:"Ganondorf"},correct:"Link"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:2,question:"What is the name of Link's horse in Ocarina of Time?",answers:{a:"Shadowfax",b:"Pegasus",c:"Malon",d:"Epona"},correct:"Epona"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:3,question:"What is the name of Link's sword?",answers:{a:"White Sword",b:"Great Fairy Sword",c:"Kokiri Sword",d:"Master Sword"},correct:"Master Sword"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:4,question:"Who are the beings that inhabit Death Mountain?",answers:{a:"The Gorons",b:"The Zora",c:"The Gerudo",d:"The Kokiri"},correct:"The Gorons"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:5,question:"In what year was the first Zelda game released?",answers:{a:"1984",b:"1992",c:"1990",d:"1986"},correct:"1986"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:6,question:"In which Zelda game did Dark Link make his first appearance?",answers:{a:"A Link to the Past",b:"Twilight Princess",c:"Ocarina of Time",d:"Adventure of Link"},correct:"Adventure of Link"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:7,question:"Which of these is not a part of the Triforce?",answers:{a:"Triforce of Strength",b:"Triforce of Power",c:"Triforce of Courage",d:"Triforce of Wisdom"},correct:"Triforce of Strength"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:8,question:"What is the true identity of Sheik?",answers:{a:"Link",b:"Zelda",c:"Ganon",d:"Street Merchant"},correct:"Zelda"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:9,question:"What is the name of the Boss in the water temple in Ocarina of Time?",answers:{a:"Bongo Bongo",b:"Queen Gohma",c:"Morpha",d:"Volvagia"},correct:"Morpha"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:10,question:"What is the top selling Zelda game of all time?",answers:{a:"Ocarina of Time",b:"A Link to the Past",c:"Windwaker",d:"Breath of the Wild"},correct:"Breath of the Wild"},
      quiz_id: 4,
      category_id: 2,
    },
    {
      questions: {number:1,question:"Where did the battle of Hornburg take place?",answers:{a:"Hornburg",b:"The Shire",c:"Helms Deep",d:"The Southlands"},correct:"Link"},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:2,question:"When is Frodo and Bilbo's birthday?",answers:{a:"Oct 5th",b:"Sept 22nd",c:"Dec 22nd",d:"May 9th"},correct:"Sept 22nd"},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:3,question:"What is inscribed over the west door of Moria",answers:{a:"One does not simply walk into Mordor.",b:"No one tosses a dwarf!",c:"Tumne talmar rahtaine nixenen umir",d:"Ennyn Durin Aran Moria. Pedo Mellon a Minno. Im Narvi hain echant."},correct:"Ennyn Durin Aran Moria. Pedo Mellon a Minno. Im Narvi hain echant."},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:4,question:"Who possessed the Horn of Gondor",answers:{a:"Boromir",b:"Aragorn",c:"Legolas",d:"Gandalf"},correct:"Boromir"},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:5,question:"Where is Galadriel from?",answers:{a:"Moria",b:"Plains of Rohan",c:"The Shire",d:"Valinor"},correct:"Valinor"},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:6,question:"Who sings a song that starts 'Hey dol! merry dol! ring a dong dillo!'",answers:{a:"Gandalf",b:"Frodo Baggins",c:"Tom Bombadil",d:"Sam Gamgee"},correct:"Tom Bombadil"},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:7,question:"What is the name of Aragorn's sword?",answers:{a:"Anduril",b:"Sting",c:"Hadhafang",d:"Gurthang"},correct:"Anduril"},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:8,question:"What was Gollum's real name?",answers:{a:"Deagol",b:"Azog",c:"Marcho",d:"Smeagol"},correct:"Smeagol"},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:9,question:"What is inscribed on the One Ring?",answers:{a:"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",b:"Troll's old seat is still the same, And the bone he boned from its owner!",c:"Now for wrath, now for ruin and a red nightfall!",d:"To Isengard with doom we come!"},correct:"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them."},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:10,question:"Who kills the Lord of the Nazgul?",answers:{a:"Arwen",b:"Eomer",c:"Eowyn",d:"Theoden"},correct:"Eowyn"},
      quiz_id: 5,
      category_id: 3,
    },
    {
      questions: {number:1,question:"What is the name of the giant worms from Arrakis?",answers:{a:"Fish Speakers",b:"Bene Gesserit",c:"Harkonnen",d:"Shai-Hulud"},correct:"Shai-Halud"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:2,question:"Who is the main character?",answers:{a:"Reverend Mother Gaius Helen Mohiam",b:"Paul Atreides",c:"Gurney Halleck",d:"Duke Leto Atreides"},correct:"Paul Atreides"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:3,question:"Where are the Harkonnen from?",answers:{a:"Geidi Prime",b:"Ginaz",c:"Grumman",d:"Kaitain"},correct:"Geidi Prime"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:4,question:"What is a crysknife made from?",answers:{a:"Pure Chaos",b:"Energy Crystals",c:"Spice Melange",d:"Tooth of a dead sandworm"},correct:"Tooth of a dead sandworm"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:5,question:"How do you defeat the defensive shields of Dune?",answers:{a:"Go Slow",b:"Use Fire",c:"Use Magic",d:"Hulk Smash It"},correct:"Go Slow"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:6,question:"What was Jessica to Duke Leto Atreides",answers:{a:"Wife",b:"Concubine",c:"Servant",d:"Sister"},correct:"Concubine"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:7,question:"What role rules house Harkonnen?",answers:{a:"King",b:"President",c:"Ayotollah",d:"Baron"},correct:"Baron"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:8,question:"Who trained Paul Atreides?",answers:{a:"Gurney Halleck",b:"Thufir Hawat",c:"Feyd-Rautha Harkonnen",d:"Duncan Idaho"},correct:"Gurney Halleck"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:9,question:"Whose Fremen name is  Muad'Dib?",answers:{a:"Duke Leto",b:"Jessica",c:"Paul Atreides",d:"Vladimir Harkonnen"},correct:"Paul Atreides"},
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:10,question:"What do the sandworms respond to?",answers:{a:"Smell",b:"Sound",c:"Fear",d:"Heat"},correct:"Sound"}, 
      quiz_id: 6,
      category_id: 3,
    },
    {
      questions: {number:1,question:"Who is Batmans Alter Ego?",answers:{a:"Bruce Banner",b:"Bruce Wayne",c:"Bruce the Shark",d:"Bruce Springstein"},correct:"Bruce Wayne"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:2,question:"In Detective Comics #267, a magical Kobold from another dimension decides to help Batman fight crime--what is his name??",answers:{a:"Mr. Mxyztplk",b:"Martian Hunter",c:"Bat-Mite",d:"Bat-Dwarf"},correct:"Bat-Mite"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:3,question:"Who was the first child to hold the mantle of Robin",answers:{a:"Dick Grayson",b:"Jason Todd",c:"Tim Drake",d:"Damian Wayne"},correct:"Dick Grayson"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:4,question:"With whom did Batman have a daughter with, in an alternate timeline",answers:{a:"Batgirl",b:"Harley Quinn",c:"Catwoman",d:"Poison Ivy"},correct:"Catwoman"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:5,question:"What is Batman's favorite food?",answers:{a:"Ginger cricket cookies",b:"Deep-Fried Tarantulas",c:"Fruit Cake",d:"Mulligatawny soup"},correct:"Mulligatawny soup"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:6,question:"Turning the time on the grandather clock to what time opens the Batcave?",answers:{a:"6:15",b:"10:47",c:"2:36",d:"00:00"},correct:"10:47"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:7,question:"What does Batman always carry in his belt, just in case?",answers:{a:"A Glock",b:"Stimulants",c:"Kryptonite",d:"Grenades"},correct:"Kryptonite"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:8,question:"What is Batman's IQ?",answers:{a:"192",b:"185",c:"166",d:"155"},correct:"192"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:9,question:"Who did Batman train with?",answers:{a:"Superman",b:"The Teenage Mutant Ninja Turtles",c:"Bane",d:"Joker"},correct:"The Teenage Mutant Ninja Turtles"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:10,question:"What is the Batman-Wolverine hybird called?",answers:{a:"Honey Badger",b:"Shadow Healer",c:"Night Slasher",d:"Dark Claw"},correct:"Dark Claw"},
      quiz_id: 7,
      category_id: 4,
    },
    {
      questions: {number:1,question:"What is Superman's Dogs name?",answers:{a:"Krypto",b:"Bash",c:"Dynomutt",d:"K-9"},correct:"Krypto"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:2,question:"Who is bald villain in Superman?",answers:{a:"Professor X",b:"Megamind",c:"Lex Luthor",d:"Krillin"},correct:"Lex Luthor"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:3,question:"What planet is Superman from?",answers:{a:"Krypton",b:"Earth",c:"Mogo",d:"Qward"},correct:"Krypton"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:4,question:"Which of these is not one of Superman's powers",answers:{a:"Heat Vision",b:"X-Ray Vision",c:"Super Flare",d:"Kamehameha"},correct:"Kamehameha"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:5,question:"Who killed superman first?",answers:{a:"Lex Luthor",b:"Batman",c:"Doomsday",d:"Lois Lane"},correct:"Doomsday"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:6,question:"What was superman's born name?",answers:{a:"Jor-El",b:"Kal-El",c:"Kon-El",d:"Seyg-El"},correct:"Kal-El"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:7,question:"What is superman's middle name?",answers:{a:"John",b:"Steve",c:"Joseph",d:"Tim"},correct:"Joseph"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:8,question:"What does the S on his chest stand for?",answers:{a:"Superman",b:"Resurrection",c:"Fear",d:"Hope"},correct:"Hope"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:9,question:"How does Superman hide his identity?",answers:{a:"Make up",b:"voice alterer",c:"platform shoes",d:"spine compression"},correct:"spine compression"},
      quiz_id: 8,
      category_id: 4,
    },
    {
      questions: {number:10,question:"What year did the first Superman Comic come out?",answers:{a:"1949",b:"1938",c:"1960",d:"1954"},correct:"1938"},
      quiz_id: 8,
      category_id: 4,
    },    
]


const seedQuestions = () => Question.bulkCreate(questionData)

module.exports = seedQuestions;
// await queryInterface.bulkInsert('questions', [
//     {
//       questions: {number:1,question:"Who plays Auntie Entity?",answers:{a:"Tina Turner",b:"Rebel Wilson",c:"Shania Twain",d:"Halle Berry"},correct:"Tina Turner"},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:2,question:"What is the name of the city where the Thunderdome is located?",answers:{a:"Methane Farm",b:"The Citadel",c:"Bartertown",d:"Chicago"},correct:"Bartertown},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:3,question:"Some of the things Nightrider yells over the radio are lyrics from what band?",answers:{a:"AC/DC",b:"Metallica",c:"Black Sabbath",d:"Poison"},correct:"AC/DC},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:4,question:"What was the name of Immortan Joe's car?",answers:{a:"Buggy #9",b:"Plymouth Rock",c:"War Rig",d:"The Gigahorse"},correct:"The Gigahorse},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:5,question:"What was the name of Charlize Theron's character in Fury Road?",answers:{a:"Toast the Knowing",b:"Imperator Furiosa",c:"The Splendid Angharad",d:"The Dag"},correct:"Imperator Furiosa},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:6,question:"What kind of car did Max drive in the original 1973 movie?",answers:{a:"Chevrolet Chevelle SS",b:"Mercury Montego GT",c:"Plymouth Scamp 340",d:"Ford XB GT Falcon"},correct:"Ford XB GT Falcon},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:7,question:"What do the War Boys huff on the road to Valhalla?",answers:{a:"Chrome Spray Paint",b:"Narcan",c:"Meth-in-a-can",d:"Stimpack"},correct:"Chrome Spray Paint},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:8,question:"How many lines of dialogue does Mel Gibson have in The Road Warrior?",answers:{a:"76",b:"22",c:"16",d:"54"},correct:"16},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:9,question:"How did War Boy, Nux, refer to Max?",answers:{a:"Slave",b:"Body Bag",c:"Blood Bag",d:"Meat"},correct:"Blood Bag},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:10,question:"In Beyond Thunderdome, which of these was not an outcome on the Wheel?",answers:{a:"Death",b:"Acquittal",c:"Aunty's Choice",d:"Monetary Fine"},correct:"Monetary Fine},
//       quiz_id: 1,
//       category_id: 1,
//     },
//     {
//       questions: {number:1,question:"What planet is Luke Skywalker from?",answers:{a:"Earth",b:"Tatooine",c:"Coruscant",d:"Dagobah"},correct:"Tatooine},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:2,question:"What planet is the center of the Glactic Republic?",answers:{a:"Coruscant",b:"Naboo",c:"Hoth",d:"Bespin"},correct:"Coruscant},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:3,question:"What is the name of the primary protaginist in Rogue One?",answers:{a:"Chewbacca",b:"Han Solo",c:"Jyn",d:"Boba Fett"},correct:"Jyn},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:4,question:"What type of stolen Imperial ship earns the call sign 'Rogue One'?",answers:{a:"Star Destroyer",b:"Cargo shuttle",c:"tie Fighter",d:"AT-ST"},correct:"Cargo Shuttle},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:5,question:"Which villain wields the two sided light-saber?",answers:{a:"Darth Vader",b:"Ajunta Pall",c:"Darth Bane",d:"Darth Maul"},correct:"Darth Maul},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:6,question:"What is Boba Fett?",answers:{a:"Rogue Bounty Hunter",b:"Stormtrooper",c:"Rebel Pilot",d:"Wookie"},correct:"Rogue Bounty Hunter},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:7,question:"Who trained Obi-Wan?",answers:{a:"Mace Windu",b:"Luke Skywalker",c:"Qui-Gon Jinn",d:"He trained himself"},correct:"Qui-Gon Jinn},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:8,question:"What planet are Wookiees from?",answers:{a:"Kashyyyk",b:"Dantooine",c:"Dagobah",d:"Naboo"},correct:"Kashyyyk},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:9,question:"What do fans speculate Jar Jar Bink is?",answers:{a:"God",b:"Bounty Hunter",c:"Jedi",d:"Sith Lord"},correct:"Sith Lord},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:10,question:"What is Kylo Ren's real name?",answers:{a:"Zorii Bliss",b:"Ben Solo",c:"Bren Derlin",d:"Maz Kanata"},correct:"Ben Solo},
//       quiz_id: 2,
//       category_id: 1,
//     },
//     {
//       questions: {number:1,question:"What was the first WoW expansion?",answers:{a:"Wrath of the Lich King",b:"The Burning Crusade",c:"Mists of Pandaria",d:"Shadowlands"},correct:"The Burning Crusade},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:2,question:"What class was Leeroy Jenkins?",answers:{a:"Mage",b:"Warlock",c:"Warrior",d:"Paladin"},correct:"Warrior},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:3,question:"What is the Alliance capital city?",answers:{a:"Stormwind",b:"Ironforge",c:"Darnassus",d:"Exodar"},correct:"Stormwind},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:4,question:"What is the Horde captial city?",answers:{a:"Thunderbluff",b:"Ogrimmar",c:"The Undercity",d:"Quel'Thalas"},correct:"Ogrimmar},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:5,question:"Who was the antagonist of The Burning Crusade",answers:{a:"Ragnaros",b:"Grom Hellscream",c:"Illidan Stormrage",d:"Deathwing"},correct:"Illidan Stormrage},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:6,question:"What the the name of the protagonist from the Warcraft Movie?",answers:{a:"Arthas Menethil",b:"Anduin Lothar",c:"Jaina Proudmoore",d:"Anduin Wrynn"},correct:"Anduin Lothar},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:7,question:"Who is the broodmother of the Black Dragonflight?",answers:{a:"Sintharia",b:"Deathwing",c:"Sindragosa",d:"Onyxia"},correct:"Onyxia},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:8,question:"What is the starting zone of the Tauren?",answers:{a:"Mulgore",b:"Valley of Trials",c:"Eversong Woods",d:"Tirisfal Glades "},correct:"Mulgore},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:9,question:"What was the plague that nearly wiped out the World of Warcraft?",answers:{a:"Infected Wounds",b:"Curse of Agony",c:"Virulent Plague",d:"Corrupted Blood"},correct:"Corrupted Blood},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:10,question:"On what planet is most of the action in WoW set?",answers:{a:"Argus",b:"Azeroth",c:"Draenor",d:"Mardum"},correct:"Azeroth},
//       quiz_id: 3,
//       category_id: 2,
//     },
//     {
//       questions: {number:1,question:"What is the name of the main character?",answers:{a:"Zelda",b:"Link",c:"Korok",d:"Ganondorf"},correct:"Link},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:2,question:"What is the name of Link's horse in Ocarina of Time?",answers:{a:"Shadowfax",b:"Pegasus",c:"Malon",d:"Epona"},correct:"Epona},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:3,question:"What is the name of Link's sword?",answers:{a:"White Sword",b:"Great Fairy Sword",c:"Kokiri Sword",d:"Master Sword"},correct:"Master Sword},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:4,question:"Who are the beings that inhabit Death Mountain?",answers:{a:"The Gorons",b:"The Zora",c:"The Gerudo",d:"The Kokiri"},correct:"The Gorons},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:5,question:"In what year was the first Zelda game released?",answers:{a:"1984",b:"1992",c:"1990",d:"1986"},correct:"1986},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:6,question:"In which Zelda game did Dark Link make his first appearance?",answers:{a:"A Link to the Past",b:"Twilight Princess",c:"Ocarina of Time",d:"Adventure of Link"},correct:"Adventure of Link},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:7,question:"Which of these is not a part of the Triforce?",answers:{a:"Triforce of Strength",b:"Triforce of Power",c:"Triforce of Courage",d:"Triforce of Wisdom"},correct:"Triforce of Strength},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:8,question:"What is the true identity of Sheik?",answers:{a:"Link",b:"Zelda",c:"Ganon",d:"Street Merchant"},correct:"Zelda},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:9,question:"What is the name of the Boss in the water temple in Ocarina of Time?",answers:{a:"Bongo Bongo",b:"Queen Gohma",c:"Morpha",d:"Volvagia"},correct:"Morpha},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:10,question:"What is the top selling Zelda game of all time?",answers:{a:"Ocarina of Time",b:"A Link to the Past",c:"Windwaker",d:"Breath of the Wild"},correct:"Breath of the Wild},
//       quiz_id: 4,
//       category_id: 2,
//     },
//     {
//       questions: {number:1,question:"Where did the battle of Hornburg take place?",answers:{a:"Hornburg",b:"The Shire",c:"Helms Deep",d:"The Southlands"},correct:"Link},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:2,question:"When is Frodo and Bilbo's birthday?",answers:{a:"Oct 5th",b:"Sept 22nd",c:"Dec 22nd",d:"May 9th"},correct:"Sept 22nd},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:3,question:"What is inscribed over the west door of Moria",answers:{a:"One does not simply walk into Mordor.",b:"No one tosses a dwarf!",c:"Tumne talmar rahtaine nixenen umir",d:"Ennyn Durin Aran Moria. Pedo Mellon a Minno. Im Narvi hain echant."},correct:"Ennyn Durin Aran Moria. Pedo Mellon a Minno. Im Narvi hain echant.},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:4,question:"Who possessed the Horn of Gondor",answers:{a:"Boromir",b:"Aragorn",c:"Legolas",d:"Gandalf"},correct:"Boromir},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:5,question:"Where is Galadriel from?",answers:{a:"Moria",b:"Plains of Rohan",c:"The Shire",d:"Valinor"},correct:"Valinor},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:6,question:"Who sings a song that starts 'Hey dol! merry dol! ring a dong dillo!'",answers:{a:"Gandalf",b:"Frodo Baggins",c:"Tom Bombadil",d:"Sam Gamgee"},correct:"Tom Bombadil},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:7,question:"What is the name of Aragorn's sword?",answers:{a:"Anduril",b:"Sting",c:"Hadhafang",d:"Gurthang"},correct:"Anduril},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:8,question:"What was Gollum's real name?",answers:{a:"Deagol",b:"Azog",c:"Marcho",d:"Smeagol"},correct:"Smeagol},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:9,question:"What is inscribed on the One Ring?",answers:{a:"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.",b:"Troll's old seat is still the same, And the bone he boned from its owner!",c:"Now for wrath, now for ruin and a red nightfall!",d:"To Isengard with doom we come!"},correct:"One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:10,question:"Who kills the Lord of the Nazgul?",answers:{a:"Arwen",b:"Eomer",c:"Eowyn",d:"Theoden"},correct:"Eowyn},
//       quiz_id: 5,
//       category_id: 3,
//     },
//     {
//       questions: {number:1,question:"What is the name of the giant worms from Arrakis?",answers:{a:"Fish Speakers",b:"Bene Gesserit",c:"Harkonnen",d:"Shai-Hulud"},correct:"Shai-Halud},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:2,question:"Who is the main character?",answers:{a:"Reverend Mother Gaius Helen Mohiam",b:"Paul Atreides",c:"Gurney Halleck",d:"Duke Leto Atreides"},correct:"Paul Atreides},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:3,question:"Where are the Harkonnen from?",answers:{a:"Geidi Prime",b:"Ginaz",c:"Grumman",d:"Kaitain"},correct:"Geidi Prime},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:4,question:"What is a crysknife made from?",answers:{a:"Pure Chaos",b:"Energy Crystals",c:"Spice Melange",d:"Tooth of a dead sandworm"},correct:"Tooth of a dead sandworm},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:5,question:"How do you defeat the defensive shields of Dune?",answers:{a:"Go Slow",b:"Use Fire",c:"Use Magic",d:"Hulk Smash It"},correct:"Go Slow},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:6,question:"What was Jessica to Duke Leto Atreides",answers:{a:"Wife",b:"Concubine",c:"Servant",d:"Sister"},correct:"Concubine},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:7,question:"What role rules house Harkonnen?",answers:{a:"King",b:"President",c:"Ayotollah",d:"Baron"},correct:"Baron},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:8,question:"Who trained Paul Atreides?",answers:{a:"Gurney Halleck",b:"Thufir Hawat",c:"Feyd-Rautha Harkonnen",d:"Duncan Idaho"},correct:"Gurney Halleck},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:9,question:"Whose Fremen name is  Muad'Dib?",answers:{a:"Duke Leto",b:"Jessica",c:"Paul Atreides",d:"Vladimir Harkonnen"},correct:"Paul Atreides},
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:10,question:"What do the sandworms respond to?",answers:{a:"Smell",b:"Sound",c:"Fear",d:"Heat"},correct:"Sound}, 
//       quiz_id: 6,
//       category_id: 3,
//     },
//     {
//       questions: {number:1,question:"Who is Batmans Alter Ego?",answers:{a:"Bruce Banner",b:"Bruce Wayne",c:"Bruce the Shark",d:"Bruce Springstein"},correct:"Bruce Wayne},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:2,question:"In Detective Comics #267, a magical Kobold from another dimension decides to help Batman fight crime--what is his name??",answers:{a:"Mr. Mxyztplk",b:"Martian Hunter",c:"Bat-Mite",d:"Bat-Dwarf"},correct:"Bat-Mite},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:3,question:"Who was the first child to hold the mantle of Robin",answers:{a:"Dick Grayson",b:"Jason Todd",c:"Tim Drake",d:"Damian Wayne"},correct:"Dick Grayson},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:4,question:"With whom did Batman have a daughter with, in an alternate timeline",answers:{a:"Batgirl",b:"Harley Quinn",c:"Catwoman",d:"Poison Ivy"},correct:"Catwoman},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:5,question:"What is Batman's favorite food?",answers:{a:"Ginger cricket cookies",b:"Deep-Fried Tarantulas",c:"Fruit Cake",d:"Mulligatawny soup"},correct:"Mulligatawny soup},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:6,question:"Turning the time on the grandather clock to what time opens the Batcave?",answers:{a:"6:15",b:"10:47",c:"2:36",d:"00:00"},correct:"10:47},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:7,question:"What does Batman always carry in his belt, just in case?",answers:{a:"A Glock",b:"Stimulants",c:"Kryptonite",d:"Grenades"},correct:"Kryptonite},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:8,question:"What is Batman's IQ?",answers:{a:"192",b:"185",c:"166",d:"155"},correct:"192},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:9,question:"Who did Batman train with?",answers:{a:"Superman",b:"The Teenage Mutant Ninja Turtles",c:"Bane",d:"Joker"},correct:"The Teenage Mutant Ninja Turtles},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:10,question:"What is the Batman-Wolverine hybird called?",answers:{a:"Honey Badger",b:"Shadow Healer",c:"Night Slasher",d:"Dark Claw"},correct:"Dark Claw},
//       quiz_id: 7,
//       category_id: 4,
//     },
//     {
//       questions: {number:1,question:"What is Superman's Dogs name?",answers:{a:"Krypto",b:"Bash",c:"Dynomutt",d:"K-9"},correct:"Krypto},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:2,question:"Who is bald villain in Superman?",answers:{a:"Professor X",b:"Megamind",c:"Lex Luthor",d:"Krillin"},correct:"Lex Luthor},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:3,question:"What planet is Superman from?",answers:{a:"Krypton",b:"Earth",c:"Mogo",d:"Qward"},correct:"Krypton},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:4,question:"Which of these is not one of Superman's powers",answers:{a:"Heat Vision",b:"X-Ray Vision",c:"Super Flare",d:"Kamehameha"},correct:"Kamehameha},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:5,question:"Who killed superman first?",answers:{a:"Lex Luthor",b:"Batman",c:"Doomsday",d:"Lois Lane"},correct:"Doomsday},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:6,question:"What was superman's born name?",answers:{a:"Jor-El",b:"Kal-El",c:"Kon-El",d:"Seyg-El"},correct:"Kal-El},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:7,question:"What is superman's middle name?",answers:{a:"John",b:"Steve",c:"Joseph",d:"Tim"},correct:"Joseph},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:8,question:"What does the S on his chest stand for?",answers:{a:"Superman",b:"Resurrection",c:"Fear",d:"Hope"},correct:"Hope},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:9,question:"How does Superman hide his identity?",answers:{a:"Make up",b:"voice alterer",c:"platform shoes",d:"spine compression"},correct:"spine compression},
//       quiz_id: 8,
//       category_id: 4,
//     },
//     {
//       questions: {number:10,question:"What year did the first Superman Comic come out?",answers:{a:"1949",b:"1938",c:"1960",d:"1954"},correct:"1938},
//       quiz_id: 8,
//       category_id: 4,
//     },    
//   ], {});