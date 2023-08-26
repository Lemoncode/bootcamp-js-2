import * as React from "react";
import { HeaderComponent, NavbarComponent } from "./components";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <NavbarComponent />
      {children}
      <h1>Aquí va el footer</h1>
    </>
  );
};
