import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "@/core/router";
import classes from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li className={classes.selected}>
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        <li>
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
