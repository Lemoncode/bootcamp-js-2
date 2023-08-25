import React from "react";
import {
  Credentials,
  CredentialsformErrors,
  createEmptyCredentials,
  createEmptyCredentialsformErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = ({ onLogin }) => {
  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = React.useState<CredentialsformErrors>(
    createEmptyCredentialsformErrors()
  );

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(credentials);
    setErrors(validationResult.errors);
    if (validationResult.succeeded) {
      onLogin(credentials);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          name="user"
          onChange={handleFieldChange}
        />
        {errors.user && <p>{errors.user}</p>}
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleFieldChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Acceder</button>
    </form>
  );
};
