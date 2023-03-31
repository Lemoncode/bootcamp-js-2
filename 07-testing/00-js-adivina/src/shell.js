import { setNumeroParaAcertar, setNumeroDeIntentos } from "./modelo"; // Esto se simplificará bastante con la solución en TypeScript

import { generarNumeroAleatorio, comprobarNumero } from "./motor";

import { muestraNumeroDeIntentos, handleCompruebaClick } from "./ui";

const inicializaNuevaPartida = () => {
  setNumeroParaAcertar(generarNumeroAleatorio());
  setNumeroDeIntentos(0);
  muestraNumeroDeIntentos();
};

document.addEventListener("DOMContentLoaded", inicializaNuevaPartida);

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleCompruebaClick);
