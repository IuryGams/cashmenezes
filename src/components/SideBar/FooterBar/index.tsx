"use client";
import Image from "next/image";
import styles from "./FooterBar.module.scss";
import { useSession } from "next-auth/react";
import { SlOptionsVertical } from "react-icons/sl";

import MinhaFoto from "../../../../public/IMG/MinhaFoto.jpg";

export default function FooterBar(){
    const {data: session, status} = useSession();

    const isAuthorization = status === "authenticated" ? session.user?.name : "Entrar";

    return(
        <footer className={styles.sideBar_footer}>
            <div className={styles.cardUser}>
                <figure>
                    <Image src={MinhaFoto} quality={100} fill alt="Minha foto" />
                </figure>
                <b>{isAuthorization}</b>
            </div>
            <div className={styles.options}>
                <SlOptionsVertical size={22}/>
            </div>
        </footer>
    )
}