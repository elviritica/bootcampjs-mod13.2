import React from "react";
import logoHeader from "/assets/logo_header_white.svg";
import classes from "./header.component.module.css";
import { useProfileContext } from "@/core/profile";

export const HeaderComponent: React.FC = () => {
    const {userName} = useProfileContext();
    return (
        <header className={classes.header}>
            <div>
                <img src={logoHeader} alt="logo" className={classes.headerLogo}/>
                <div className={classes.usuario}>
                    <p>{userName}</p>
                </div>
            </div>
        </header>
    )
}