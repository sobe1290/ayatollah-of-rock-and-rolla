const ctx = document.getElementById('myChart');
const userScore = document.getElementById('userScore').getAttribute('data-obj');
const activeUser = document.getElementById('final').getAttribute('data-user');
const scoreArr = document.getElementsByName('highscores');
const userArr = document.getElementsByName('topUsers');
let scores = [userScore]
let users = [activeUser]

for (let i=0; i<scoreArr.length; i++) {
    scores.push(scoreArr[i].innerText)
};
for (let i=0; i<userArr.length; i++) {
    users.push(userArr[i].innerText)
};

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: users,
        datasets: [{
            label: 'Score',
            data: scores,
            backgroundColor: [
                '#F5CB5C',
                '#3F88C5',
                '#3F88C5',
                '#3F88C5',
                '#3F88C5',
                '#3F88C5',
            ],
            borderColor: [
                '#F5CB5C',
                '#3F88C5',
                '#3F88C5',
                '#3F88C5',
                '#3F88C5',
                '#3F88C5',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0, 
                    max: 100 
                }
            }]
        }
    }
});
