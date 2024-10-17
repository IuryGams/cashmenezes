"use client"
import Image from "next/image"
import styled from "styled-components"

export const ContainerProfile = styled.section`
    grid-area: profile;
    align-self: center;
    /* justify-self: center; */
    position: relative;
    /* height: 10dvh; */
    /* #061426 */
    /* #7D96B3 */
`

export const CardProfile = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 25% 75%;
    grid-template-rows: 50% 50%;
    grid-template-areas: "image name" 
    "image details";
    gap: 2px;
    row-gap: 6px;
    color: white;
    font-size: 1em;
`

export const ProfileImage = styled(Image)`
    grid-area: image;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    object-fit: cover;
    
`

export const ProfileName = styled.b`
    grid-area: name;
    align-self: flex-end;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
`

export const ProfileDetails = styled.span`
    grid-area: details;
    font-size: 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%; 
    color: #7D96B3;
    font-family: inter;
`

export const ContainerArrow = styled.div`
    position: absolute;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    border-radius: 20px 0 0 20px;
    background-color: #50BB69;
    height: 46px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg{
        fill: white;
    }
`