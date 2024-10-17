'use client';
// import "./SideBar.scss";

/* Components */
import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";
import MenuBar from "./MenuBar";
import UserBar from "./UserBar";
import { useSideBarContext } from "@/shared/context";
import { ContainerSideBar } from "./styled";


export default function SideBar() {

    const { sideBar, ToggleSideBar } = useSideBarContext();

    return(
        <ContainerSideBar className={sideBar === false ? "side_bar" : "side_bar closed" }>
            <UserBar /> 
            <MenuBar open={sideBar} />
            {/* <HeaderBar active={ToggleSideBar}  /> */}
            {/* <FooterBar /> */}
        </ContainerSideBar>
    )
}