import React from 'react'
import { Pie } from 'react-chartjs-2'

import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';


const PieChart = ({ insights }) => {

    const pestleCounts = insights.reduce((counts, obj) => {
        const pestle = obj.pestle;

        if (pestle) {
            counts[pestle] = (counts[pestle] || 0) + 1;
        }

        return counts;
    }, {});

    Chart.register(ArcElement, Tooltip, Legend)

    const chartConfig = {
        type: 'pie',
        data: {
            labels: Object.keys(pestleCounts),
            datasets: [
                {
                    data: Object.values(pestleCounts),
                    backgroundColor: [
                        'rgb(7, 25, 82)',
                        'rgb(87, 55, 93)',
                        'rgb(236, 83, 176)',
                        'rgb(77, 45, 183)',
                        'rgb(8, 131, 149)',
                        'rgb(144, 12, 63)',
                        'rgb(212, 217, 37)',
                        'rgb(26, 93, 26)',
                        'rgb(255, 155, 80)',
                        'rgb(82, 109, 130)',
                        'rgb(24, 61, 61)',
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
                    text: 'Insights For Different Pestles',
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
            <Pie data={chartConfig.data} options={chartConfig.options} />
        </div>
    )
}

export default PieChart