

function evaluateLetter(){
    alert("Consonante o vocal");
    let abecedario = prompt("Ingresa cualquier letra del abecedario: ");
    console.log("Ingresa cualquier letra del abecedario: ");
    console.log("La letra ingresada es: " + abecedario);

    switch (abecedario) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        alert("La letra ingresada es una vocal");
        console.log("La letra ingresada es una vocal");
        break;
      default:
        alert("La letra ingresada es una consonante");
        console.log("La letra ingresada es una consonante");
    }
}
evaluateLetter();
