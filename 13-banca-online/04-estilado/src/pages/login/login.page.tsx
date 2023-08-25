import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components/login-form.component";
import { useNavigate } from "react-router-dom";
import { isValidLogin } from "./api";
import { mapCredentialFromVmToApi } from "./login.mapper";
import { appRoutes } from "@/core/router";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (credentials: Credentials) => {
    const apiCredential = mapCredentialFromVmToApi(credentials);
    isValidLogin(apiCredential).then((isValid) => {
      if (isValid) {
        navigate(appRoutes.accountList);
      } else {
        alert("Usuario o clave no correctas ppsst: admin@email.com / test ");
      }
    });
  };

  return (
    <div>
      <h1>Acceso</h1>
      <LoginFormComponent onLogin={handleSubmit} />
    </div>
  );
};
