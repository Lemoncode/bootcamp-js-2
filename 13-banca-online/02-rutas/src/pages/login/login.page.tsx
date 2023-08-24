import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const LoginPage: React.FC = () => {
  return (
    <div>
      Login
      <br />
      <Link to={appRoutes.accountList}>Mis cuentas</Link>
    </div>
  );
};
