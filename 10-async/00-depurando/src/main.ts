import "./style.css";

const btn = document.querySelector("button")!;

const barajarCartas = () => {
  console.log("Barajar");
};

const iniciarPartida = () => {
  barajarCartas();
};

btn.addEventListener("click", () => {
  iniciarPartida();
});
