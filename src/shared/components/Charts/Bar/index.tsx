"use client";

import { Chart } from "react-google-charts";



export default function ChartBar() {

    const dataBase = {
        Meses: ["Janeiro", "Fevereiro", "Março", "Maio", "Abril", "Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        Liquido: [800, 964, 487, 600, 700, 800, 488,484,345,874,345,684 ],
        Gasto: [800, 964, 487, 600, 700, 800, 488,484,345,874,345,684 ].reverse()
    }

    let arrIndice = Object.keys(dataBase);
    let arrValues = Object.values(dataBase);
    let data = [];

    for(let i = 0; i < arrValues[0].length; i++) {
        data[i] = arrValues.map(item => item[i]);
    }
    data.unshift(arrIndice);

    const options = {
        title: "Alguma coisa",
        chartArea: { width: "85%", height: "70%" },
        colors: ["#28a745", "rgb(255, 64, 64)"],
        hAxis: {
          title: "Meses",
        },
        vAxis: {
          title: "Valor",
        },
        legend: { position: "bottom"},
        animation: { duration: 500, easing: "linear", startup: true}
    };

    return (
        <article className="chart_bar">
            <Chart
                chartType="ColumnChart"
                data={data}
                width="100%"
                height="100%"
                options={options}
                chartLanguage="pt-BR"
            />
        </article>
    )
}