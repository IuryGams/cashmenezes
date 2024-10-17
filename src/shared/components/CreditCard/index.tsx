import { ChipCard, CreditCardContainer, Flag, LimitCard, NumberCard, OwnerCard, ValidCard } from "./styled";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";

interface CreditCardInter {
    limit?: number;
    name?: string;
    valid?: string;
    numberCard?: string;
}

export default function CreditCard({ limit, name, valid, numberCard }: CreditCardInter) {
    return (
        <CreditCardContainer>
            <LimitCard>
                <label>Limite</label>
                <b>R$ {limit}</b>
            </LimitCard>
            <ChipCard><FcSimCardChip size={56} /></ChipCard>
            <OwnerCard>
                <label>Dono</label>
                <b>{name}</b>
            </OwnerCard>
            <ValidCard>
                <label>Validade</label>
                <b>{valid}</b>
            </ValidCard>
            <NumberCard>{numberCard}</NumberCard>
            <Flag><RiMastercardFill size={58} /></Flag>
        </CreditCardContainer>
    )
}