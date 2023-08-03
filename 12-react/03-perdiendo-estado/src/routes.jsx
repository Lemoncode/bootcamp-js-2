import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./login";
import { Bienvenida } from "./bienvenida";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
      </Routes>
    </BrowserRouter>
  );
};
