import * as React from "react";
import {
  HeaderComponent,
  NavbarComponent,
  FooterComponent,
} from "./components";
import classes from "./app-layout.module.css";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      <main className={classes.mainContent}>{children}</main>
      <FooterComponent />
    </>
  );
};
