const ctx = document.getElementById('myChart');
let power = document.getElementById('powerLevel').getAttribute('data-powerlevel');
const avatar = document.getElementById('avatar');
power = Number(power)

switch (true) {
    case (power <2000):
        avatar.src = "../images/bronzeAvatar.PNG"
        break;
    case (power >= 2000 && power < 4000): 
        avatar.src = "../images/silverAvatar.PNG"
        break;
    case (power >= 4000 && power < 6000):
        avatar.src = "../images/goldAvatar.PNG"
        break;
    case (power >= 6000):
        avatar.src = "../images/jewelAvatar.PNG"
        break;
    default:
        avatar.src = "../images/bronzeAvatar.PNG"
        break;
}
 console.log(power)

const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Nerd Level'],
        datasets: [{
            data: [power],
            backgroundColor: [
                '#4DA167',
            ],
            borderColor: [
                '#4DA167',

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
    },
   
});