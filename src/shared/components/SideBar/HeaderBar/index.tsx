'use client';
import "./HeaderBar.scss";

import Image from "next/image";
import logoName from "../../../../../public/icons/logo.png";

export default function HeaderBar({ active }: { active: () => void}){

    return(
        <header className="logo_container">
            <figure className="box_image">
                <Image src={logoName} width={50} height={50} alt="Logo do site" />
            </figure>

            <h1 className="title">
                Cash Menezes
            </h1>

            <div className="burger_container"  >
                <input defaultChecked type="checkbox" id="burguer_Menu" />
                <label htmlFor="burguer_Menu" onClick={active} className="burger_trigger">
                    <div className="burger_menu"></div>
                </label>
            </div>
            
        </header>
    )
}