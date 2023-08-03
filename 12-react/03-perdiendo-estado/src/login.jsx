import React from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "./app";

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState({ usuario: "", contraseña: "" });
  const { setProfile } = React.useContext(ProfileContext);

  const gestionarEnvio = (e) => {
    e.preventDefault();
    if (login.usuario === "admin@email.com" && login.contraseña === "test") {
      setProfile({ usuario: login.usuario });
      navigate("/bienvenida");
    } else {
      alert("Usuario / contraseña incorrectos, psst admin@email.com / test");
    }
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={gestionarEnvio}>
        <label htmlFor="usuario">Usuario:</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          required
          onChange={(e) => setLogin({ ...login, usuario: e.target.value })}
        />
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          name="contraseña"
          required
          onChange={(e) => setLogin({ ...login, contraseña: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
