"use client"
import styled from "styled-components"

export const ContainerCurrentTransactions = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    gap: 8px;
    flex-grow: 1;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 8px 16px;
    overflow-y: hidden;
`

export const Transaction = styled.div`
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 1fr;
    grid-template-areas: "icon details value";
    align-items: center;
    flex-grow: 1;
    cursor: pointer;
    
    > b, span {
        transition: all 0.2s;
    }
    
    &:hover{


        b{
            color: var(--gray-hover);
        }

        span{
            transform: translateX(5px);
        }
    }
`

export const Icon = styled.i`
    grid-area: icon;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: aliceblue;
`

export const LabelBox = styled.div`
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;
    margin-left: 10px;
`

export const BoxValue = styled.div`
    grid-area: value;
`
