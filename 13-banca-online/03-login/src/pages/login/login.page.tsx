import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components/login-form.component";

export const LoginPage: React.FC = () => {
  const handleSubmit = (credentials: Credentials) => {
    console.log(credentials);
  };

  return (
    <div>
      <h1>Acceso</h1>
      <LoginFormComponent onLogin={handleSubmit} />
    </div>
  );
};
