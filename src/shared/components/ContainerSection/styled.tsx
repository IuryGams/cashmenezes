"use client"
import Link from "next/link"
import styled from "styled-components"

export const ContainerSectionStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    color: var(--blue-text);

    h2{
        font-weight: bold;
    }
`

export const StyledLink = styled(Link)`
    color: var(--blue-text);
`