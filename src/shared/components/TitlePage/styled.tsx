"use client"
import styled from "styled-components"

export let ArrowTop = styled.div``


export const HeaderDashboardContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: whitesmoke;
    padding: 1em;
    transition: all 300ms ease-in-out;
    position: relative;
    grid-area: titlePage;

    &:hover ${ArrowTop} {
        height: 15px;
        opacity: 1;
        pointer-events: initial;
    }
`

export const Title = styled.div`

    h1{
        font-size: 28px;
    }
`

export const StyledSection = styled.section`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const ContainerIcons = styled.div`
    display: flex;
    gap: 16px;
`
export const Icon = styled.i`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    background-color: var(--gray-hover);

    svg{
        fill: var(--gray-text);
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;

    img{
        object-fit: cover;
        border-radius: 50%;
        pointer-events: none;
    }

    b{
        pointer-events: none; 
    }

    &:hover{
        background-color: var(--gray-hover);
    }
`

ArrowTop = styled(ArrowTop)`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #243b55;
    width: 200px;
    height: 0px;
    border-radius: 0 0 80px 80px;
    opacity: 1;
    pointer-events: none;
    transition: all 200ms ease;
    overflow: hidden;

    i{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        cursor: pointer;

        svg{
            color: white;
        }
    }
`


// Actived Style
export const HeaderTrigger = styled.input.attrs({ type: "checkbox" })`
    display: none;

    &:checked + ${HeaderDashboardContainer} {
        height: 0;
        padding: 0;

        ${Title} {
            opacity: 0;
            height: 0;
            pointer-events: none;
        }

        ${ArrowTop} {
            height: 20px;
            pointer-events: initial;
        }

        ${StyledSection} 
        {  
            display: none;
        }
    }
`