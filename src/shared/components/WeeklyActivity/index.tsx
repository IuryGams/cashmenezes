import BarChartWeeking from "@/shared/Charts/WeekBarChart";
import ContainerSection from "../ContainerSection";
import { ContainerChart } from "./styled";


export default function WeeklyActivity() {
    const data = [
        { day: 'Domingo', received: 300, spent: 100 },
        { day: 'Segunda', received: 450, spent: 200 },
        { day: 'Terça', received: 450, spent: 300 },
        { day: 'Quarta', received: 450, spent: 100 },
        { day: 'Quinta', received: 400, spent: 150 },
        { day: 'Sexta', received: 450, spent: 250 },
        { day: 'Sábado', received: 450, spent: 275 },
    ];

    return (
        <ContainerSection title="Atividade semanal - 6 a 12 de outubro" style={{gridColumn: "week"}} >
            <ContainerChart>
                <BarChartWeeking data={data} yAxisMax={500} />
            </ContainerChart>
        </ContainerSection>
    )
}