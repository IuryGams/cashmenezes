'use client';
import "./MenuList.scss";
import { ReactNode } from "react";

interface MenuListProps {
    title?: string;
    children?: ReactNode
}

export default function MenuList({ title, children }: MenuListProps) {

    return (
        <menu className="menu_list" >
            <h3>{title}</h3>
            {children}
        </menu>
    )
}