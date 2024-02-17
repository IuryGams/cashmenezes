import styles from "./SideBar.module.scss"

/* Components */
import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";
import MenuBar from "./MenuBar";
import { useContext } from "react";
import { SideBarContext } from "@/context/sideBarContext";
import { Drawer } from "@mui/material";


export default function SideBar() {

    return(
        <Drawer variant="permanent">
            <HeaderBar />
            {/* <MenuBar/> */}
            {/* <FooterBar /> */}
        
        </Drawer>
    )
}