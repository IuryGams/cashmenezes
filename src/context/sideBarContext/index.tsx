import { ReactNode, createContext, useState } from "react";

interface SideBarProps {
    sideBar: boolean;
    ToggleSideBar: () => void;
}

export const SideBarContext = createContext({} as SideBarProps);
SideBarContext.displayName = "SideBar";

export const SideBarProvider = ({children}: {children: ReactNode}) => {

    const [sideBar, setSideBar] = useState<boolean>(false);
    
    const ToggleSideBar = () => setSideBar(!sideBar);

    return(
        <SideBarContext.Provider value={{sideBar, ToggleSideBar}}>
            {children}
        </SideBarContext.Provider>
    )
}