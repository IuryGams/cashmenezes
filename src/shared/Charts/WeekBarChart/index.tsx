// components/BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    Plugin
} from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    data: { day: string; received: number; spent: number }[];
    yAxisMax?: number; // Valor máximo opcional para o eixo Y
}

export default function BarChartWeeking({ data, yAxisMax }: BarChartProps) {

    const chartData = {
        labels: data.map((entry) => entry.day), // Labels dos dias da semana
        datasets: [
            {
                label: 'Ganhos',
                data: data.map((entry) => entry.received),
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            },
            {
                label: 'Despesas',
                data: data.map((entry) => entry.spent),
                backgroundColor: 'rgba(255, 99, 132, 0.6)'
            },
        ],
    };

    // Opções do gráfico tipadas corretamente
    const options: ChartOptions<'bar'> = {
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: ({raw}) => `R$ ${raw}`,
                },
            },
            legend: {
                display: true,
                position: 'top',
                align: 'end',
            },
        },
        scales: {
            y: {
                max: yAxisMax,
                beginAtZero: true,
                ticks: {
                    callback: function (value: string | number) {
                        return `R$ ${value}`;
                    },
                },
            },
        },
    };

    return <Bar data={chartData} options={options} />;
}

