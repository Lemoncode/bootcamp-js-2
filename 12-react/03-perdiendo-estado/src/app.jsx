import React from "react";
import { Router } from "./routes";

export const ProfileContext = React.createContext(null);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = React.useState({
    usuario: "",
  });

  return (
    <ProfileContext.Provider value={{ usuario: profile.usuario, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const App = () => {
  return (
    <ProfileProvider>
      <Router />
    </ProfileProvider>
  );
};
