'use client';
import "./MenuBar.scss";
import { IoCashOutline, IoHomeOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { FaMoneyBill } from "react-icons/fa";
/* Components  */
import MenuList from "./MenuList";
import { usePathname } from "next/navigation";
import { ContainerNavigation, Icon, ItemMenu, LinkMenu, NavMenu, Text } from "./styled";

export default function MenuBar({open}: {open: boolean}) {

    const pathName = usePathname();

    return (

        <ContainerNavigation>
        
            <NavMenu>
                <ItemMenu>
                    <LinkMenu href="">
                        <Icon><TiHome/></Icon>
                        <Text>Dashboard</Text>
                    </LinkMenu>
                </ItemMenu>
                <ItemMenu>
                    <LinkMenu href="">
                        <Icon><FaMoneyBill/></Icon>
                        <Text>Transações</Text>
                    </LinkMenu>
                </ItemMenu>
                
               
            </NavMenu>

        </ContainerNavigation>
    )
}