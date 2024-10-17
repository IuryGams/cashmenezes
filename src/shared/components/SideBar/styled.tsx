"use client"
import styled from "styled-components"

export const ContainerSideBar = styled.aside`
    grid-area: sideBar;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr 80px;
    grid-template-areas:
    "profile"
    "navigation"
    "enterprise";
    background: linear-gradient(to right,#141e30,#243b55) !important;
    height: 100dvh;
    max-height: 100dvh;
    width: 300px;
    padding-inline: 15px;
    transition: width 300ms;
`