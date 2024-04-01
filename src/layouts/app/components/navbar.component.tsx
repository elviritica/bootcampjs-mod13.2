import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavbarComponent: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routesPrefixes.accountList)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        <li
          className={
            pathname.startsWith(routesPrefixes.movements)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.movements}>Movimientos</Link>
        </li>
        <li
          className={
            pathname.startsWith(routesPrefixes.transfer)
              ? classes.selected
              : ""
          }
        >
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
