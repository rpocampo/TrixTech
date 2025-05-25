// Bar Chart
var barCtx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Events Book',
      data: [12, 10, 14, 12, 12, 7, 13],
      backgroundColor: '#   ffc107'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Line Chart
var lineCtx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Set 1',
        data: [14, 9, 7, 13, 14, 10, 15],
        borderColor: 'red',
        fill: false
      },
      {
        label: 'Set 2',
        data: [10, 12, 12, 9, 14, 7, 13],
        borderColor: 'blue',
        fill: false
      }
    ]
  },
  options: {
    responsive: true
  }
});
