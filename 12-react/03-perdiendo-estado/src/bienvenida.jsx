import React from "react";
import { ProfileContext } from "./app";

export const Bienvenida = () => {
  const { usuario } = React.useContext(ProfileContext);

  return (
    <div>
      <h1>Bienvenido</h1>
      <p>
        Tu nombre de usuario es: <span>{usuario}</span>
      </p>
    </div>
  );
};
