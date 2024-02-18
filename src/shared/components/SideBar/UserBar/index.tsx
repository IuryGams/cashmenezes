"use client";
import "./UserBar.scss";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaGear } from "react-icons/fa6";


export default function UserBar() {

    const { data: session } = useSession();

    return (
        <section className="container_profile" >
            <div className="card_profile">
                <figure>
                    <Image src={session?.user?.image || ""} quality={100} width={50} height={50} alt={`Foto de ${session?.user?.name}`} />
                </figure>
                <div className="content_profile">
                    <b className="name_profile">{session?.user?.name}</b>
                    <span>{session?.user?.email}</span>
                </div>
            </div>
            <div className="settings">
                <FaGear/>
            </div>
        </section>
    )
}