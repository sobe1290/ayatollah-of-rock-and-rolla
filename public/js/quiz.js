//GET questions and answers from quizroutes.js

//Shep will figure this out.

//grab submit button
const submitBTN = document.getElementById('submitBTN');
//empty array for score keeping
const score = [];

console.log(submitBTN);
const selectedAnswer = document.getElementsByName("questionAnswers").checked = true;
const correctAnswer = document.getElementById("correctAnswer").value;

//if (selectedAnswer ===)


//submitBTN.addEventListener('click', console.log(selectedAnswer));

document.querySelector('#submitBTN').addEventListener('click', console.log(correctAnswer));


// document
//   .addEventListener('submit', console.log(submitBTN));


//on submit, grab total score, add it to Main.handlebars powerlevel and PUT it to User.power_level userRoutes.js