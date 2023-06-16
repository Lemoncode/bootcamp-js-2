import "./style.css";

const btn = document.querySelector("button")!;

btn.addEventListener("click", () => {
  for (let i = 0; i < 1000000000; i++) {
    console.log("Bloqueo");
  }
});
