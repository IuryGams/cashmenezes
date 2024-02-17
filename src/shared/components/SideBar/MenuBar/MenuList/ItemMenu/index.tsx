import styles from "./ItemMenu.module.scss";
import Link from "next/link";
import { IconType } from "react-icons";

interface ItemMenuProps {
    Icon: IconType;
    text: string
    link: string;
}

export default function ItemMenu({ Icon, text, link}: ItemMenuProps) {
    return (
        <li className={styles.itemList} >
            <Link href={link}>
                <Icon />
                <span>{text}</span>
            </Link>
        </li>
    )
}