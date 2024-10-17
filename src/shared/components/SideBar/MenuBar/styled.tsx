"use client"
import Link from "next/link"
import styled from "styled-components"

export const ContainerNavigation = styled.nav`
    padding-block: 16px;
    border-top: 0.5px solid rgba(#FFF, 0.5);
    border-bottom: 0.5px solid rgba(#FFF, 0.5);
    grid-row: 2 / 3;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const NavMenu = styled.menu`
    display: flex;
    flex-direction: column;
    
    gap: 8px;
`

export const ItemMenu = styled.li`
    width: 100%;
    height: 52px;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -15px;
        width: 6px;
        height: 46px;
        border-radius: 0 8px 8px 0;
        background-color: var(--blue);
    }
`

export const LinkMenu = styled(Link)`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 16px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding-inline: 1em;

    &:hover{
        background-color: var(--gray-hover);
    }
`

export const Icon = styled.i`

    svg{
        width: 28px;
        height: 28px;
        fill: var(--gray-text);
        color: var(--gray-text);
    }
`

export const Text = styled.span`
    color: var(--gray-text);
    font-weight: bold;
`