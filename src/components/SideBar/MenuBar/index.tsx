import styles from "./MenuBar.module.scss";
import { IoCashOutline, IoHomeOutline } from "react-icons/io5";

/* Components  */
import ItemMenu from "./MenuList/ItemMenu";
import MenuList from "./MenuList";

export default function MenuBar() {
    return (
        <nav className={styles.sideBar_nav}>
            <MenuList title="Primeira Seção">
                <ItemMenu Icon={IoHomeOutline} text="Inicio" link="" />
                <ItemMenu Icon={ IoCashOutline} text="Extrato" link="" /> 
            </MenuList>
            <MenuList title="Segunda Seção">

            </MenuList>
        </nav>
    )
}