import { handleCompruebaClick, iniciarPartida } from "./ui";

document.addEventListener("DOMContentLoaded", iniciarPartida);

const botonComprobar = document.getElementById("comprobar");
botonComprobar?.addEventListener("click", handleCompruebaClick);
