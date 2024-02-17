'use client';
import { ReactNode } from "react";
import AuthProvider from "./AuthProvider";
import { SideBarProvider } from "@/context/sideBarContext";


export default function Providers ({children}: {children: ReactNode}) {
    return(
        <>
            <AuthProvider>
                <SideBarProvider>
                    {children}
                </SideBarProvider>
            </AuthProvider>
        </>
    )
}