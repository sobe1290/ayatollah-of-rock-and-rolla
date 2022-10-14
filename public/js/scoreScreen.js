// fetch GET all scores for that quiz, and current score by 


// function to grab all the scores from quizzes
const scoreQuizzesHandler = async (event) => {
    event.preventDefault();
    


    const response = await fetch('/api/scoreRoutes', {
        method: 'GET',
    });
        //TO DO: how do we grab the scores just for the selected quiz?
        // query score table via
    try {
        if (response.ok) {
            //TO DO: Grab the location needed to put in replace
            document.location.replace('/*add in element from shadin */');
        } else {
            alert('Failed to get the scores for this quiz')
        }
    } catch (err) {
        response.status(500).json(err)
    }
}