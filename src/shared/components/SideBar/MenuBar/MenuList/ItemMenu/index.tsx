import "./ItemMenu.scss";
import Link from "next/link";
import { IconType } from "react-icons";

interface ItemMenuProps {
    Icon: IconType;
    text: string
    link: string;
}

export default function ItemMenu({ Icon, text, link}: ItemMenuProps) {
    return (
        <li className="item_menu" >
            <Link href={link}>
                <i>
                    <Icon />
                </i>
                <span>{text}</span>
            </Link>
        </li>
    )
}