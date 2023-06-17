// Definir una cola de tareas
const colaDeTareas = [];

// Función para agregar una tarea a la cola
function encolarTarea(tarea) {
  colaDeTareas.push(tarea);
}

// Función para ejecutar una tarea
function ejecutarTarea(task) {
  task();
}

// Event loop
function eventLoop() {
  while (colaDeTareas.length > 0) {
    // Obtener la próxima tarea de la cola
    const tarea = colaDeTareas.shift();
    console.log(colaDeTareas.length);

    // Ejecutar la tarea
    ejecutarTarea(tarea);
  }

  // Si no hay más tareas en la cola, pausar el event loop
  // hasta que se agregue una nueva tarea
  if (colaDeTareas.length === 0) {
    console.log("Event Loop en pausa.");
  }

  // Volver a ejecutar el event loop en el próximo ciclo de eventos
  // Es decir, dejo que se ejecute código que estaba esperando
  setTimeout(eventLoop, 0);
}

// Ejemplos de tareas
function tarea1() {
  console.log("Tarea 1 ejecutada.");
}

function tarea2() {
  console.log("Tarea 2 ejecutada.");
}

function tarea3() {
  console.log("Tarea 3 - Yo voy más tarde...");
}

// Agregar tareas a la cola
encolarTarea(tarea1);
encolarTarea(tarea2);

// Iniciar el event loop
eventLoop();

setTimeout(() => {
  //Fíjate que lo puedo ejecutar a pesar de que el Event Loop  lo hayamos lanzado
  encolarTarea(tarea3);
}, 1000);
