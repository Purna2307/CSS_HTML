const backgroundColor = [
        'rgba(93, 18, 210, 0.2)',
        'rgba(185, 49, 252, 0.2)',
        'rgba(255, 106, 194, 0.2)'
    ];
const borderColor = [
        'rgba(93, 18, 210, 1)',
        'rgba(185, 49, 252, 1)',
        'rgba(255, 106, 194, 1)'
    ];
const data1 = {
  labels: [ '2000-2009', '2010-2019', 'après 2019'],
  datasets: [
    {
      data: [ 2, 17, 7 ],
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1
    }
  ]
};
const config1 = {
  type: 'doughnut',
  data: data1,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Apparitions au cinéma de Margot Robbie'
      }
    }
  },
};
const data2 = {
  labels: [ '2000-2009', '2010-2019', 'après 2019'],
  datasets: [
    {
      data: [ 4,3,0 ],
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1
    }
  ]
};
const config2 = {
  type: 'doughnut',
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Apparitions à la télévision de Margot Robbie'
      }
    }
  },
};
const myChart1 = new Chart(document.getElementById('chart1').getContext('2d'), config1);
const myChart2 = new Chart(document.getElementById('chart2').getContext('2d'), config2);