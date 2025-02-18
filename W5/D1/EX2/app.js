// 1- ENTRADA DISCOTECA
let edad = 22;
if (edad > 18) {
    console.log("Eres mayor de edad");
} else if (edad == 18) {
    console.log("Eres mayor de edad, pero por los pelos ;)");
} else {
    console.log("Eres menor de edad");
}

// 2- ENTRADA DISCOTECA
let color = prompt("Elige un color: azul, verde, rojo, amarillo o violeta").toLowerCase();

switch (color) {
    case "azul":
        console.log("El azul es como el mar, siempre que el cielo sea azul (y sea de día).");
        break;
    case "verde":
        console.log("El verde es el color de la esperanza y de los árboles en primavera.");
        break;
    case "rojo":
        console.log("El rojo es el color de la pasión y de las fresas más dulces.");
        break;
    case "amarillo":
        console.log("El amarillo brilla como el sol en un día despejado.");
        break;
    case "violeta":
        console.log("El violeta es misterioso, como un atardecer en el horizonte.");
        break;
    default:
        console.log("Ese color no está en la lista, pero seguro que es bonito.");
}

// 3- LAMPARA NO ENCIENDE
console.log("Parece que la lámpara no funciona.");
let pregunta1 = prompt("¿Está enchufada (sí/no)?").toLowerCase();
if (pregunta1 == "no") {
    console.log("Enchúfala pues!");
} else {
    let pregunta2 = prompt("¿Está el foco quemado (sí/no)?").toLowerCase();
    if (pregunta2 == "no") {
        console.log("Reemplaza el foco.");
    } else {
        console.log("Compra nueva lámpara.")
    }
}
