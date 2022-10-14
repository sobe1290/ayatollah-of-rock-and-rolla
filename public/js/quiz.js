//GET questions and answers from quizroutes.js

//needed buttons and answers
const submitBTN = document.getElementById('submitBTN');
const selectedAnswer = document.getElementsByName("questionAnswers").checked = true;
//trying to grab all correctAnswer id from the answers of the quiz.
const correctAnswer = document.getElementById("correctAnswer");


//variable to keep track of score
const score =  0;



//TODO: create function to grab the correct answer/ and user answer and compare
const checkAnswer = () => {
    //debugging
    console.log('submit button has been clicked');
    console.log(selectedAnswer);
    console.log(correctAnswer);
    //TODO: put in if/else statement to check if selected answer = correct answer
    if (selectedAnswer === correctAnswer) {
        //add 1 to the score if correct
        score= score + 10;
        console.log(score);
        return; // what are we returning? go to add up score?
        
    } else {
        //do we want to put in a pentalty for incorrect answers?
        return;
    }
    
    
}


//on submit, grab total score, add it to Main.handlebars powerlevel and PUT it to User.power_level userRoutes.js
submitBTN.addEventListener('click', checkAnswer);

