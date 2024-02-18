'use client';
import "./MenuBar.scss";
import { IoCashOutline, IoHomeOutline } from "react-icons/io5";

/* Components  */
import MenuList from "./MenuList";
import ItemMenu from "./MenuList/ItemMenu";
import { usePathname } from "next/navigation";

export default function MenuBar({open}: {open: boolean}) {

    const pathName = usePathname();

    return (

        <nav className="sideBar_nav" >
        
            <MenuList title="Primeira Seção">
                <ItemMenu Icon={IoHomeOutline} text="Inicio" link="" />
                <ItemMenu Icon={IoCashOutline} text="Extrato" link="" /> 
            </MenuList>

            <MenuList title="Segunda Seção">

            </MenuList>

        </nav>
    )
}