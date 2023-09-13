import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, BarElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

const BarGraph = ({ insights }) => {

    const sectorCounts = insights.reduce((counts, obj) => {
        const sector = obj.sector;

        if (sector) {
            counts[sector] = (counts[sector] || 0) + 1;
        }

        return counts;
    }, {});

    Chart.register(BarElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

    const chartConfig = {
        type: 'bar',
        data: {
            labels: Object.keys(sectorCounts),
            datasets: [
                {
                    label: 'Insights For  Sector',
                    data: Object.values(sectorCounts),
                    backgroundColor: [
                        'rgb(7, 25, 82)',
                        'rgb(87, 55, 93)',
                        'rgb(212, 217, 37)',
                        'rgb(77, 45, 183)',
                        'rgb(8, 131, 149)',
                        'rgb(236, 83, 176)',
                        'rgb(144, 12, 63)',
                        'rgb(26, 93, 26)',
                        'rgb(255, 155, 80)',
                        'rgb(82, 109, 130)',
                        'rgb(24, 61, 61)',
                        'rgb(39, 158, 255)',
                        'rgb(46, 56, 64)',
                        'rgb(255, 238, 99)',
                    ],
                    barThickness: 60,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    type: 'linear',
                    beginAtZero: true,
                },
            },
            plugins: {
                legend: {
                    labels: {
                        font: 100,
                    },
                },
                title: {
                    display: true,
                    text: 'Growth in every country in terms of Intensity',
                    font: {
                        size: 24,
                        style: 'italic',
                        family: 'Helvetica Neue'
                    },
                },
            },
        },
    };


    return (
        <div>
            <Bar data={chartConfig.data} options={chartConfig.options} />
        </div>
    )
}

export default BarGraph