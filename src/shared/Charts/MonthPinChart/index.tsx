import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Registrar os componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface PieChartProps {
    data: { category: string; count: number }[];
}

export default function MonthPieChart({ data }: PieChartProps) {
    const total = data.reduce((sum, entry) => sum + entry.count, 0);

    const chartData = {
        labels: data.map((entry) => entry.category),
        datasets: [
            {
                data: data.map((entry) => entry.count),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                ],
                hoverOffset: 4,
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };

    const options: ChartOptions<'pie'> = {
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const count = context.raw as number;
                        const percentage = ((count / total) * 100).toFixed(2);
                        return `${context.label}: ${count} vezes (${percentage}%)`;
                    },
                },
            },
            legend: {
                display: false,
            },
            datalabels: {
                formatter: (value: number, context: any) => {
                    const percentage = ((value / total) * 100).toFixed(2);
                    const category = context.chart.data.labels[context.dataIndex];
                    return `${percentage}%\n${category}`;
                },
                color: '#fff',
                anchor: 'center',
                align: 'end',
                font: {
                    size: 12,
                    weight: 'bold',
                },
                textShadowColor: "rgba(0,0,0,1)",
                textStrokeColor: '#000',
                textStrokeWidth: 2,
                textShadowBlur: 6,
            },
        },
    };

    return <Pie data={chartData} options={options} />;
}
