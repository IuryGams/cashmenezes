'use client';
import "./SideBar.scss";

/* Components */
import FooterBar from "./FooterBar";
import HeaderBar from "./HeaderBar";
import MenuBar from "./MenuBar";
import UserBar from "./UserBar";
import { useSideBarContext } from "@/shared/context";


export default function SideBar() {

    const { sideBar, ToggleSideBar } = useSideBarContext();

    return(
        <aside className={sideBar === false ? "side_bar" : "side_bar closed" }>
            <HeaderBar active={ToggleSideBar}  />
            <MenuBar open={sideBar} />
            <UserBar /> 
            {/* <FooterBar /> */}
        </aside>

        // <aside className={sideBar === false ? "side_bar" : "side_bar closed"}>
        //     <HeaderBar open={sideBar} active={ToggleSideBar} />

        //     <UserBar />

        //     <MenuBar open={sideBar} />
        //     {/* <FooterBar /> */}
        
        // </aside>
    )
}