"use client";
import "./UserBar.scss";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaGear } from "react-icons/fa6";
import { CardProfile, ContainerArrow, ContainerProfile, ProfileDetails, ProfileImage, ProfileName } from "./styled";
import { FaArrowLeftLong } from "react-icons/fa6";


export default function UserBar() {

    const { data: session } = useSession();

    return (
        <ContainerProfile>
            <CardProfile>
                <ProfileImage 
                src={session?.user?.image || "https://github.com/iurygams.png"} 
                quality={100} 
                width={58} 
                height={58} 
                alt={`Foto de ${session?.user?.name} `} 
                />
                <ProfileName>{session?.user?.name || "Iury"}</ProfileName>
                <ProfileDetails>{session?.user?.email || "iurydev7@gmail.com"}</ProfileDetails>
            </CardProfile>
            <ContainerArrow>
                <FaArrowLeftLong/>
            </ContainerArrow>
        </ContainerProfile>
    )
}