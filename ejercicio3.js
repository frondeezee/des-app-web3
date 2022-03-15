

function pregunta(){
    alert("¿Cual es el mayor de tres?");
    console.log("¿Cual es el mayor de tres?");
    let a = prompt("Ingresa el primer número:");
    console.log("Primer número: " + a)
    let b = prompt("Ingresa el segundo número:");
    console.log("Primer número: " + b)
    let c = prompt("Ingresa el tercer número:");
    console.log("Primer número: " + c)
    let d;
      if (a > b){
        d = a;
      }else if (b > c){
        d = b;
      }else
        d = c;
    console.log(d);
    console.log("El número mayor es: " + d);
    alert("El número mayor es: " + d);
}
pregunta();
