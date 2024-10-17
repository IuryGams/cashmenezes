"use client"
import styled from "styled-components"

export const CreditCardContainer = styled.div`
    display: grid;
    grid-template-columns: 45% 40% 15%;
    grid-template-rows: 35% 35% 30%;
    grid-template-areas: 
    "limit limit chip"
    "ownerCard valid valid"
    "numberCard numberCard flag";
    flex-grow: 1;
    border-radius: 25px;
    background: linear-gradient(to right top, rgb(76, 73, 237) 30%, rgb(10, 6, 244));
    padding: 24px;
    color: white;
    align-items: center;
`

const LabelCard = styled.div`
    display: flex;
    flex-direction: column;
`

export const LimitCard = styled(LabelCard)`
    grid-area: limit;
    align-self: flex-start;
`

export const OwnerCard = styled(LabelCard)`
    grid-area: ownerCard;
`

export const ValidCard = styled(LabelCard)`
    grid-area: valid;
`

export const NumberCard = styled(LabelCard)`
    grid-area: numberCard;
    align-self: center;
    font-size: 22px;
`

const Icon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Flag = styled(Icon)`
    grid-area: flag;
    justify-self: flex-end;
`

export const ChipCard = styled(Icon)`
    grid-area: chip;

    svg{
        fill: white;
        color: white;
    }
`