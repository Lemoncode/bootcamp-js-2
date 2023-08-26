import React from "react";
import classes from "./header.component.module.css";
import logoHeader from "/assets/logo_header_white.svg";
import { useProfileContext } from "@/core/profile";

export const HeaderComponent: React.FC = () => {
  const { userName } = useProfileContext();

  return (
    <header className={classes.header}>
      <div>
        <img className={classes.headerLogo} src={logoHeader} />
        <div className={classes.usuario}>
          <p>{userName}</p>
        </div>
      </div>
    </header>
  );
};
