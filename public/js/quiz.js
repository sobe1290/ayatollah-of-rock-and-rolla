const submitBTN = document.getElementById('submitBTN');


//grabing variables for userid, quizid 
const quizid = document.getElementById('quiz-id').getAttribute('data-quiz');
const userPowerlevel = document.getElementById('powerLevel').getAttribute('data-powerlevel');
const usersession_id = document.getElementById('user-id').getAttribute('data-usersession');




const checkAnswer = () => {

  console.log(`powerlevel: ${userPowerlevel}`);
  //console.log(usersession_id);
  console.log(`quizID#: ${quizid}`);
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
    let updateScore = { 
      score: score,
      user_id: usersession_id,
      quiz_id: quizid,
     }
     let newPowerlevel = userPowerlevel +score;

     //POST request for score
    const response = await fetch('/api/score', {
      method: 'POST',
      body: JSON.stringify(updateScore),
      headers: { 'Content-Type': 'application/json' }, 
      })
      if (response.ok) {
        console.log('post request for score successful')
      }else {
        alert('updating score has failed')
      }
      // put request for user
      const putResponse = await fetch('api/users/update', {
        method: 'PUT',
        body: JSON.stringify({
          power_level: newPowerlevel,
        }),
      headers: { 'Content-Type': 'application/json' }, 
      })
      if (putResponse.ok) {
        console.log('put request for USERS successful')
        
      }else {
        alert('updating POwerlevel has failed')
      }

      const postuserquiz =await fetch('api/userquiz',{
        method: 'POST',
        body: JSON.stringify ({
          user_id: usersession_id,
          quiz_id: quizid,
        }),
        headers: { 'Content-Type': 'application/json' }, 
      })
      if (postuserquiz.ok) {
        console.log('POST request for Userquiz successful')
        
      }else {
        alert('updating userquiz has failed')
      }    

     
   
  }, "1000")
}

// when hit submitBTN check answer starts
submitBTN.addEventListener('click', checkAnswer);
