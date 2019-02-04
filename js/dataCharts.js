// ====== CHARTS ======
// --- LINE CHART ---
// const LINE = document.getElementById("lineChart");
// let lineChart = new Chart(LINE, {
//
// };


// --- BAR CHART ---
const BAR = document.getElementById("barChart");
let barChart = new Chart(BAR, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'people',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                '#7377bf',
                '#7377bf',
                '#7377bf',
                '#7377bf',
                '#7377bf',
                '#7377bf',
                '#7377bf'
            ],
            borderWidth: 1,

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// --- PIE CHART ---
const DONUT = document.getElementById("donutChart");
let donutChart = new Chart(DONUT, {
    type: 'doughnut',
    data: {
      labels: ['tablets', 'phones', 'desktop'],
      datasets: [{
          data: [5, 5, 20],
          backgroundColor: ['#81c98f', '#74b1bf', '#7377bf'],
          }],
      },
    options: {

    }
});
