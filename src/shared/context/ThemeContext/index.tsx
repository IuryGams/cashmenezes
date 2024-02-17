"use client";
import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { LightTheme, DarkTheme } from "@/shared/themes";

interface InterfaceThemeContextProps {
    themeName: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext({} as InterfaceThemeContextProps);
ThemeContext.displayName = "Theme Context";

export const AppThemeProvider = ({ children }: {children: ReactNode}) => {

    const [themeName, setThemeName] = useState< "light" | "dark" >("light");

    const toggleTheme = useCallback(() => {
        setThemeName(oldTheme => oldTheme === "light" ? "dark" : "light" );
    }, []);

    const theme = useMemo(() => {
        if(themeName === "light") return LightTheme;

        return DarkTheme;
    }, [themeName]);

    return(
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width="100dvw" height="100dvh" bgcolor={theme.palette.background.default} >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};