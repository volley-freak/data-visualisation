import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

const DoughnutChart = ({ insights }) => {

    const sectorsInUSA = insights
        .filter(obj => obj.country === 'United States of America')
        .reduce((counts, obj) => {
            const sector = obj.sector;

            if (sector) {
                counts[sector] = (counts[sector] || 0) + 1;
            }

            return counts;
        }, {});

    // console.log(sectorsInUSA);

    Chart.register(ArcElement, Tooltip, Legend)

    const chartConfig = {
        type: 'doughnut',
        data: {
            labels: Object.keys(sectorsInUSA),
            datasets: [
                {
                    data: Object.values(sectorsInUSA),
                    backgroundColor: [
                        'rgb(144, 12, 63)',
                        'rgb(236, 83, 176)',
                        'rgb(24, 61, 61)',
                        'rgb(7, 25, 82)',
                        'rgb(77, 45, 183)',
                        'rgb(8, 131, 149)',
                        'rgb(87, 55, 93)',
                        'rgb(212, 217, 37)',
                        'rgb(26, 93, 26)',
                        'rgb(255, 155, 80)',
                        'rgb(82, 109, 130)',
                        'rgb(39, 158, 255)',
                        'rgb(46, 56, 64)',
                        'rgb(255, 238, 99)',
                    ],
                    hoverOffset: 4,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        fontSize: 60,
                    },
                },
                title: {
                    display: true,
                    text: 'Different Sectors In Usa',
                    font: {
                        size: 24,
                        style: 'italic',
                        family: 'Helvetica Neue'
                    },
                },
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const label = context.label || '';
                            const value = context.formattedValue || '';
                            return `${label}: ${value}`;
                        }
                    },
                },
            },
        },
    };


    return (
        <div className='border rounded p-2'>
            <Doughnut data={chartConfig.data} options={chartConfig.options} />
        </div>
    )
}

export default DoughnutChart