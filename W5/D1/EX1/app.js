// 1- BECA ESTUDIANTE
let edad = 35;
let ciudad = "Barcelonaa";
let familiaNumerosa = true;
let genioProgramacion = true;

let cumpleCondiciones =
    (edad >= 18 && ciudad.toLowerCase() === "barcelona") ||
    (edad > 30 && familiaNumerosa) ||
    (edad > 12 && edad < 18 && genioProgramacion);

if (!cumpleCondiciones) {
    console.log("Lo siento! No cumples las condiciones para obtener una beca Hack-Iron");
} else {
    console.log("Enhorabuena! Cumples las condiciones para obtener una beca Hack-Iron")
}

// 2- COCHE NO ARRANCA
let tieneGasolina = true;
let tieneDinero = true;
let tieneBateria = false;

if (!tieneGasolina) {
    console.log("Hay que poner gasolina...");
    if (tieneDinero) {
        console.log("Voy a poner gasolina.");
    } else {
        console.log("Como no tengo dinero, me toca ir en Metro.")
    }
} else {
    if (!tieneBateria) {
        console.log("No tiene batería. Es necesario recargarla.");
    } else {
        console.log("Tengo que pasar por el mecánico.")
    }
}