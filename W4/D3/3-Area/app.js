// 3- Pedir el radio al usuario para calcular el área de un círculo. 
// Buscad la fórmula para calcular la superficie del círculo y el valor de PI (con 4 decimales).

const pi = 3.1516;
let radio = prompt("Por favor, introduzca un radio de una circumferencia:");
let superficie = 3.1416 * Math.pow(radio,2);
console.log("La superfície del círculo con radio", radio, "es de", superficie, ".");