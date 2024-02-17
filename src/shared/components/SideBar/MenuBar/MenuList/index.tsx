import styles from "./MenuList.module.scss";
import { ReactNode } from "react";

interface MenuListProps {
    title?: string;
    children?: ReactNode
}

export default function MenuList({ title, children }: MenuListProps) {
    return (
        <menu className={styles.menu}>
            <h4>{title}</h4>
            {children}
        </menu>
    )
}