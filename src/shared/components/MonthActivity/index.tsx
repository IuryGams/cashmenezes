import MonthPieChart from "@/shared/Charts/MonthPinChart";
import ContainerSection from "../ContainerSection";
import { ContainerChart } from "./styled";


export default function MonthActivity(){

    const data = [
        { category: 'Comida', count: 3 },
        { category: 'Investido', count: 1 },
        { category: 'Gasolina', count: 5 },
        { category: 'Lazer', count: 2 },
        { category: 'Outros', count: 8 },
      ];

    return (
        <ContainerSection title="Atividade mensal - Outubro" style={{gridColumn: "month"}} >
            <ContainerChart>
                <MonthPieChart data={data} />
            </ContainerChart>
        </ContainerSection>
    )
}