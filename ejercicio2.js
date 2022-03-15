

function pregunta(){
  let Fahrenheit = prompt("¿Cuál es la temperatura (en grados Fahrenheit)?")
    console.log(Fahrenheit + " en Fahrenheit");
    const CELCIUS =((Fahrenheit) - 32) / 1.8;
    console.log(CELCIUS + " en Celcius");
    alert (CELCIUS + " en Celcius");
  }
pregunta();
