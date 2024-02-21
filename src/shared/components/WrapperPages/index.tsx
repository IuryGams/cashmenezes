'use client';
import { ReactNode } from "react";
import "./WrapperPages.scss";
import { useSideBarContext } from "@/shared/context";

export default function WrapperPages({children}: {children: ReactNode}) {

    const { sideBar } = useSideBarContext();

    return(
        <main className={sideBar === false ? "wrapper_page" : "wrapper_page closed"}>
            {children}
        </main>
    )
}