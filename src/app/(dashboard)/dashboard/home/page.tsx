'use client';
import "./page.scss";
import { FiDollarSign } from "react-icons/fi";
import { GiPayMoney } from "react-icons/gi";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import ChartBar from "@/shared/components/Charts/Bar";

export default function Inicio() {

    const columns = [
        { field: "description", headerName: "Descrição", width: 150 },
        { field: "price", headerName: "Preço", width: 150 },
        { field: "departament", headerName: "Departamento", width: 150 },
        { field: "metod_payment", headerName: "Método de Pagamento", width: 200 },
        { field: "data", headerName: "Data", width: 150 },
        { field: "status", headerName: "Status", width: 150 }
    ]

    const users = [
        {
            id: "1",
            description: "Mercado",
            price: 287,
            departament: "Comida",
            metod_payment: "à vista",
            data: "17/02/2024",
            status: "Pago"
        },
        {
            id: "2",
            description: "Mercado",
            price: 300,
            departament: "Comida",
            metod_payment: "à vista",
            data: "17/02/2024",
            status: "Pago"
        },
        {
            id: "3",
            description: "Mercado",
            price: 487,
            departament: "Comida",
            metod_payment: "à vista",
            data: "17/02/2024",
            status: "Pago"
        }
    ]

    return (
        <>
            <section className="content_dashboard">

                <div className="card_payment">
                    <i>
                        <FiDollarSign />
                    </i>
                    <b>R$ 20.000</b>
                    <span>Patrimônio</span>
                </div>
                <div className="card_payment">
                    <i>
                        <GiPayMoney />
                    </i>
                    <b>R$ 20.000</b>
                    <span>Custos</span>
                </div>
                <div className="card_payment">
                    <i>
                        <FaAngleDoubleDown />
                    </i>
                    <b>R$ 20.000</b>
                    <span>Despesas</span>
                </div>
                <div className="card_payment">
                    <i>
                        <FaArrowTrendUp />
                    </i>
                    <b>R$ 50.000</b>
                    <span>Lucros</span>
                </div>

                <section className="area_table" >
                    
                </section>

                <ChartBar />

            </section>
        </>
    )
}