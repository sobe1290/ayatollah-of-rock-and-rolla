const category = document.getElementById('categories');
const saveQBtn = document.getElementById('saveQBtn');
const saveQuiz = document.getElementById('saveQuizBtn');
const title = document.getElementById('title');
const description = document.getElementById('description');
let quizQuestion = document.getElementById('question');
let optionA = document.getElementById('a');
let optionB = document.getElementById('b');
let optionC = document.getElementById('c');
let optionD = document.getElementById('d');
const correctAnswer = document.getElementById('correct');
const author = document.getElementById('quizAuthor').innerText;

let newQuiz = {};
const questionArr = [];
answerArr = [optionA, optionB, optionC, optionD]

const saveQHandler = async (ev) => {
    ev.preventDefault();
    let question = {
        answers: {
            a: optionA.value,
            b: optionB.value,
            c: optionC.value,
            d: optionD.value
        },
        correct: findCorrect(),
        question: quizQuestion.value
    };
    let questionData = { 
        questions: question,
        category_id: category.value
    }
    const response = await fetch('/api/questions/',{
        method: 'POST',
        body: JSON.stringify(questionData),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        alert('question saved!')
    } else {
        alert('Something went wrong')
    }
    questionArr.push(question)
    question = {};
    quizQuestion.value = "";
    optionA.value = "";
    optionB.value = "";
    optionC.value = "";
    optionD.value = "";
};

const serialQuestions = (arr) => {
    for (let i=0; i<arr.length; i++) {
        arr[i].number = i+1
    }
};

const findCorrect = () => {
    for (let i=0; i<answerArr.length; i++) {
        if (correctAnswer.value == answerArr[i].getAttribute('data-q')) {
            return answerArr[i].value
        }
        
    }
};

const saveQuizHandler = async (ev) => {
    ev.preventDefault()
    serialQuestions(questionArr)
    newQuiz = {
        title: title.value,
        description: description.value,
        questions: questionArr,
        creator_id: author,
        category_id: category.value
    };
        console.log(questionArr)


    const response = await fetch('/api/quiz/', {
        method: 'POST',
        body: JSON.stringify(newQuiz),
        headers: { 'Content-Type': 'application/json' }, 
    });
    if (response.ok) {
        document.location.replace('/account')
      } else {
        alert('Your quiz is bad and you should feel bad.')
      }
};

saveQBtn.addEventListener('click', saveQHandler);
saveQuiz.addEventListener('click', saveQuizHandler);