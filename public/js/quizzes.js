// GET all quizzes for that category

// function to grab all the quizzes
const getQuizzesHandler = async (event) => {
    event.preventDefault();
    
    const response = await fetch('/api/quizroutes', {
        method: 'GET',
    });
    try {
        if (response.ok) {
            //TO DO: Grab the location needed to put in replace
            document.location.replace('/');
        } else {
            alert('Failed to get all the quizzes')
        }
    } catch (err) {
        response.status(500).json(err)
    }
}


//adding event listener
document.querySelector('').addEventListener('click', getQuizzesHandler)
