const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22', 
        'Jul 22', 'Aug 22', 'Sep 22', 'Oct 22', 'Nov 22', 'Dec 22'],
      datasets: [{
        label: 'Per Month Usage',
        data: [10, 14, 22, 12, 9.6, 8, 
            9.8, 16, 16, 24, 24, 26],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {min: 0, max: 30}
        }
      },
      legend: {display: false}
    }
  });

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});