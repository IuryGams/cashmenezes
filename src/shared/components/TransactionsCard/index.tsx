import ContainerSection from "../ContainerSection";
import { BoxValue, ContainerCurrentTransactions, Icon, LabelBox, Transaction } from "./styled";
import { AiFillCreditCard } from "react-icons/ai";

export default function TransactionsCard() {
    return (
        <ContainerSection title="Transações recentes" style={{gridColumn: "transactions"}}>
            <ContainerCurrentTransactions>
                <Transaction>
                    <Icon>
                        <AiFillCreditCard size={25} />
                    </Icon>
                    <LabelBox>
                        <b>Titulo da compra</b>
                        <span>12/10/2024</span>
                    </LabelBox>
                    <BoxValue>R$ 500</BoxValue>
                </Transaction>
                <Transaction>
                    <Icon>
                        <AiFillCreditCard size={25} />
                    </Icon>
                    <LabelBox>
                        <b>Titulo da compra</b>
                        <span>12/10/2024</span>
                    </LabelBox>
                    <BoxValue>R$ 500</BoxValue>
                </Transaction>
                <Transaction>
                    <Icon>
                        <AiFillCreditCard size={25} />
                    </Icon>
                    <LabelBox>
                        <b>Titulo da compra</b>
                        <span>12/10/2024</span>
                    </LabelBox>
                    <BoxValue>R$ 500</BoxValue>
                </Transaction>
            </ContainerCurrentTransactions>
        </ContainerSection>
    )
}