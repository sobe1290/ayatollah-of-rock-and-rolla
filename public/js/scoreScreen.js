
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
            label: 'Scores',
            data: scores,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
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
