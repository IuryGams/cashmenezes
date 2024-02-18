"use client";
import "./FooterBar.scss";
import { useSession } from "next-auth/react";
import { LuSun  } from "react-icons/lu";
import { GoMoon } from "react-icons/go";

import MinhaFoto from "../../../../../public/IMG/MinhaFoto.jpg";

export default function FooterBar(){
    const {data: session, status} = useSession();

    const isAuthorization = status === "authenticated" ? session.user?.name : "Entrar";

    return(
        <footer className="sideBar_footer">
            <i className="icon_footer">
                <LuSun/>
            </i>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <i className="icon_footer">
                <GoMoon/>
            </i>
        </footer>
    )
}