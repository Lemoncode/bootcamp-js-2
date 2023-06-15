import "./style.css";

// Definir una cola de tareas
const colaDeTareas = [];

// Función para agregar una tarea a la cola
function encolarTareas(task) {
  colaDeTareas.push(task);
}

// Función para ejecutar una tarea
function ejecutarTarea(task) {
  task();
}

// Función principal del event loop
function eventLoop() {
  while (colaDeTareas.length > 0) {
    // Obtener la próxima tarea de la cola
    const task = colaDeTareas.shift();

    // Ejecutar la tarea
    ejecutarTarea(task);
  }

  // Si no hay más tareas en la cola, finalizar el event loop
  console.log("Event loop finished.");
}

// Ejemplos de tareas

function tarea1() {
  console.log("Task 1 executed.");
}

function tarea2() {
  console.log("Task 2 executed.");
}

function tareaCierreNavegador() {
  console.log("Cierra Navegador.");
}

// Agregar tareas a la cola
encolarTareas(tarea1);
encolarTareas(tarea2);

// Iniciar el event loop
eventLoop();
