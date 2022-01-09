let myChart = document.getElementById('myChart').getContext('2d');
let delayed;
let consumptionChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
            label: 'Peak',
            data: [120, 100, 110, 80, 180, 150],
            backgroundColor: '#da2128'
        },
        {
            label: 'Non - Peak',
            data: [230, 300, 200, 280, 300, 200],
            backgroundColor: '#ffb300'
            
        }]
    },
    options: {
        scales: {
            y: {
                stacked: true
            },
            x: {
                stacked: true
            }
            
        },
        plugins: {
            title: {
                display: true,
                text: 'CONSUMPTION',
                align: 'start',
                margin: {
                    top:10
                }
            },
            legend: {
                display: true,
                labels: {
                    position: 'right'
                }
            }
        }
    }
       
});