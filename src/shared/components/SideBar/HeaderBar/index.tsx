'use client';
import styles from "./HeaderBar.module.scss";

import Image from "next/image";
import logoName from "../../../../../public/icons/logo_name2.png";
import { IoMdMenu } from "react-icons/io";
import { useContext, useState } from "react";
import { SideBarContext } from "@/shared/context/sideBarContext";


export default function HeaderBar(){

    const { sideBar, ToggleSideBar  } = useContext(SideBarContext);
    const { sideBar_cabecalho, active_cabecalho } = styles;

    return(
        <header className={sideBar ?  active_cabecalho : sideBar_cabecalho}>
            <h1>CashMenezes</h1>
            <figure>
                <Image src={logoName} alt="Logo do site" />
            </figure>
            <div onClick={ToggleSideBar}>
                <IoMdMenu/>
            </div>
        </header>
    )
}