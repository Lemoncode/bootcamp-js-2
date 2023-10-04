import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components/login-form.component";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from "@/core/profile";
import { isValidLogin } from "./api";
import { mapCredentialFromVmToApi } from "./login.mapper";
import { appRoutes } from "@/core/router";
import classes from "./login.page.module.css";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserProfile } = useProfileContext();

  const handleSubmit = (credentials: Credentials) => {
    const apiCredential = mapCredentialFromVmToApi(credentials);
    isValidLogin(apiCredential).then((isValid) => {
      if (isValid) {
        setUserProfile(credentials.user);
        navigate(appRoutes.accountList);
      } else {
        alert("Usuario o clave no correctas ppsst: admin@email.com / test ");
      }
    });
  };

  return (
    <div>
      <header className={classes.header}>
        <img className={classes.logo} src="assets/logo_header.svg" />
      </header>
      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Acceso</h1>
        <LoginFormComponent onLogin={handleSubmit} />
        <h4 className={classes.inputFooter}>
          Está Usted en un <strong>sitio seguro</strong>
        </h4>
      </div>
    </div>
  );
};
