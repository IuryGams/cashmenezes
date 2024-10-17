"use client"
import styled from "styled-components"


export const ContainerOverview = styled.section`
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: repeat(2, 360px) 1fr;
    /* grid-auto-rows: 320px; */
    grid-template-areas: 
    "cards transactions"
    "week month"
    "table table";
    gap: 24px;
    height: 100%;
`