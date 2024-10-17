'use client';
import { ReactNode } from "react";
import AuthProvider from "./AuthProvider";
import { SideBarProvider } from "../context/sideBarContext";
import { AppThemeProvider } from "../context";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <>
            <AuthProvider>
                <AppThemeProvider>
                    <SideBarProvider>
                        {children}
                    </SideBarProvider>
                </AppThemeProvider>
            </AuthProvider>
        </>
    )
}