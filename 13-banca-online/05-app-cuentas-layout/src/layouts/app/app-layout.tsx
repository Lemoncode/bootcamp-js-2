import * as React from "react";
import { HeaderComponent } from "./components";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      {children}
      <h1>Aquí va el footer</h1>
    </>
  );
};
