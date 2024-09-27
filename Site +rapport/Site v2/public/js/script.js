const backgroundColor = [
    'rgb(185, 148, 112)',
    'rgb(254, 250, 224)',
    'rgb(244, 191, 150)',
    'rgb(248, 223, 212)',
    'rgb(255, 239, 232)'
];
const borderColor = [
    'rgb(185, 148, 112)',
    'rgb(254, 250, 224)',
    'rgb(244, 191, 150)',
    'rgb(248, 223, 212)',
    'rgb(255, 239, 232)'
];

const data1 = {
    labels: ['Pionel Pepsi', 'Nova Ponaldo', 'Donatello Cbappé', 'Neymal jr', 'Erlin Goaland'],
    datasets: [
        {
            data: [30, 40, 35, 35, 27],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1 ,
        }
    ]
};

const config1 = {
    type: 'pie',
    data: data1,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
				fontsize: 10 ,
            },
            title: {
                display: true,
                text: 'Nombre de buts dans la dernière saison',
                position: 'top',
                align: 'center',
				fontsize: 10 ,
            }
        }
    },
};


const myChart1 = new Chart(document.getElementById('chart1').getContext('2d'), config1);

