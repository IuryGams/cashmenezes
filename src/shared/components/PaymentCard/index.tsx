import CreditCard from "../CreditCard";
import { SectionCards, } from "./styled";
import ContainerSection from "../ContainerSection";



export default function PaymentCards() {
    return (
        <ContainerSection
            title="Meus cartões"
            path="./credit_cards"
            linkText="Ver todos"
            style={{gridColumn: "cards"}}
        >
            <SectionCards>
                <CreditCard
                    limit={3500}
                    name="Iury Gama"
                    valid="10/26"
                    numberCard="3778 **** **** 1234"
                />
                <CreditCard
                    limit={2500}
                    name="PicPay"
                    valid="10/26"
                    numberCard="3778 **** **** 1234"
                />
            </SectionCards>
        </ContainerSection>
    )
}