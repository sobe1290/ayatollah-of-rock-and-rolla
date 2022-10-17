const submitBTN = document.getElementById('submitBTN');
const express =require('express');

//grabing variables for userid, quizid 
const quizid = document.getElementById('quiz-id').getAttribute('data-quiz');

const app = express();


const checkAnswer = () => {

  const selectedAnswerArray = []
  const correctAnswerArray = []
    
    //This part takes all of the selected answers and puts them into an array
  let allQuestions = document.getElementsByName("questionAnswers");

    allQuestions.forEach((answer) => {
      if(answer.checked) {
          selectedAnswerArray.push(answer.value);
          
      }
    })

  //This part takes all of the correct answers and puts them into an array
  let correctAnswers = document.getElementsByName("correctAnswer");

    correctAnswers.forEach((answer) => {
      correctAnswerArray.push(answer.innerHTML);   
    })

    //This part compares the two arrays and makes a new array with only the correct answers 
  setTimeout(async () => {
    const matchingAnswers = selectedAnswerArray.filter(function (obj) {
      return correctAnswerArray.indexOf(obj) !== -1;
      
    })

    console.log(matchingAnswers)
    //creates score based on how many questions answered correctly
    let score = matchingAnswers.length*10
    console.log(score)

    //TODO: Take the score variable value and shoot it to the server, along wth the user ID, and Quiz number 
    // let updateScore = { 
    //   score: req.session.powerLevel,
    //   user_id: req.session.user_id,
    //   quiz_id: quizid,
    //  }

    const response = await fetch('/api/score', {
      //POST request for score
      method: 'POST',
      body: JSON.stringify({
        score: req.session.powerLevel,
        user_id: req.session.user_id,
        quiz_id: quizid,
      }),
      headers: { 'Content-Type': 'application/json' }, 
      })
      if (response.ok) {
        console.log('post request successful')
        console.log(req.session.user_id);
        console.log(quizid);
        console.log(req.session.powerLevel);
      }else {
        alert('updating score has failed')

      }


    // PUT request for user
  }, "1000")
}
//on submit, grab total score, add it to Main.handlebars powerlevel and PUT it to User.power_level userRoutes.js
submitBTN.addEventListener('click', checkAnswer);
