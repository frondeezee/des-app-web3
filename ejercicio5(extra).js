

function decimalToBinary(){
  alert('Conversión de número decimal a binario')
  const number = parseInt(prompt('Ingresa un número decimal: '));
  const result = number.toString(2);

  console.log('El número ingresado en binario es: ' + ' ' + result);
  alert('El número ingresado en binario es: ' + ' ' + result);
}
decimalToBinary();
