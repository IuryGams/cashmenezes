'use client';
import { ReactNode } from "react";
import AuthProvider from "./AuthProvider";
import { SideBarProvider } from "../context/sideBarContext";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "../themes/LightTheme";


export default function Providers ({children}: {children: ReactNode}) {
    return(
        <>
            <ThemeProvider theme={LightTheme}>
                <AuthProvider>
                    <SideBarProvider>
                        {children}
                    </SideBarProvider>
                </AuthProvider>
            </ThemeProvider>
        </>
    )
}