// ====== CHARTS ======
//  --- LINE CHART ---
const LINE = document.getElementById('lineChart')
let lineChart = new Chart(LINE, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
    }],
  },
  options: {
    elements: {
      line: {
        tension: 0,
      }
    }
  },
});
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
