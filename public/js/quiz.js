const submitBTN = document.getElementById('submitBTN');


//grabing variables for userid, quizid 
const quizid = document.getElementById('quiz-id').getAttribute('data-quiz');
//const userid =req.session.user_id;
//const powerLevel =req.session.powerLevel;
console.log(userid);
console.log(quizid);
console.log(powerLevel);

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
  setTimeout(() => {
    const matchingAnswers = selectedAnswerArray.filter(function (obj) {
      return correctAnswerArray.indexOf(obj) !== -1;
      
    })

    //This part looks at how many items are in the mathing array, and adds 10 to the "score" variable
    console.log(matchingAnswers)
    let score = matchingAnswers.length * Math.ceil(Math.random()*10) + matchingAnswers.length
    console.log(score)

    //TODO: Take the score variable value and shoot it to the server, along wth the user ID, and Quiz number (be cautious of the order of operations. Probably needs to be all in an async/await)

    //POST request for score

    // PUT request for user
  }, "1000")
}
//on submit, grab total score, add it to Main.handlebars powerlevel and PUT it to User.power_level userRoutes.js
submitBTN.addEventListener('click', checkAnswer);
