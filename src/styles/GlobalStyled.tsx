"use client"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --blue: #0077ff;
    --blue-text: #343C6A;
    --gray-text: #b1b1b1;
    --gray-hover: rgb(231, 237, 255);
}

@keyframes shake {
    0% {
        rotate: 0deg;
    }

    33% {
        rotate: 10deg;
    }

    66% {
        rotate: -10deg;
    }

    100% {
        rotate: 10deg;
    }
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    list-style: none;
    text-decoration: none;
    flex: none;
}

    body{
        max-width: 100vw;
        width: 100vw;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr;
        overflow: hidden;
        grid-template-areas: 
        "sideBar titlePage"
        "sideBar contentPage";
    }
`

export default GlobalStyle;