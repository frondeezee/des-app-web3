

function pregunta(){
  let ask = prompt("¿Hiciste la tarea?");
    console.log ("La respuesta es " + ask)
    if (ask === "si") {
      console.log ("¡Bien Hecho!");
      alert("¡Bien Hecho!")
    }else {
      console.log ("No te rindas, ¡Empieza ahora mismo!");
      alert("No te rindas, ¡Empieza ahora mismo!")
    }
}
pregunta();
