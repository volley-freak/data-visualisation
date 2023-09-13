import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

const LineChart = ({ insights }) => {

    const countryIntensities = {};

    // Iterate through the arrayOfObjects and accumulate intensities
    insights.forEach(obj => {
        const country = obj.country;
        const intensity = obj.intensity || 0; // Default to 0 if intensity is not provided or falsy

        if (country) {
            if (countryIntensities[country]) {
                countryIntensities[country] += intensity;
            } else {
                countryIntensities[country] = intensity;
            }
        }
    });

    // console.log(countryIntensities);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const chartConfig = {
        type: 'line',
        data: {
            labels: Object.keys(countryIntensities),
            datasets: [
                {
                    label: 'Growth in every country',
                    data: Object.values(countryIntensities),
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 3,
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
                        fontSize: 60,
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
            <Line data={chartConfig.data} options={chartConfig.options} />
        </div>
    )
}

export default LineChart