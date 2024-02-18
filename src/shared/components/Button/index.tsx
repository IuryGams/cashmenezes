'use client';
import { useAppThemeContext } from "@/shared/context";
import { Button } from "@mui/material"


export default function ButtonToggleTheme () {
    const {toggleTheme} = useAppThemeContext();

    return (
        <Button variant="contained" color="primary" onClick={toggleTheme} >Change Theme</Button>
    )
}