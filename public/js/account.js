const ctx = document.getElementById('myChart');
let power = document.getElementById('powerLevel').getAttribute('data-powerlevel');

power = Number(power)

const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Power Level'],
        datasets: [{
            data: [power],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    min: 0, 
                    max: 10000
                }
            }]
        }
    }
});