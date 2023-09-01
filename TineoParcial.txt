// ! Ejercicio 01

function verificarTipoDato(pmValor1, pmValor2) {
  if (typeof pmValor1 === "number" && typeof pmValor2 === "number") {
    return pmValor1 * pmValor2;
  }
  else if (typeof pmValor1 === "string" && typeof pmValor2 === "string") {
    return pmValor1 + pmValor2;
  }
  else if (typeof pmValor1 === "boolean" && typeof pmValor2 === "boolean") {
    return false;
  } else {
    return "Los tipos de datos no son iguales";
  }
}
// * Resultado
// console.log(verificarTipoDato(5, -3));
// console.log(verificarTipoDato("Parcial de ", "Programación Imperativa"));
// console.log(verificarTipoDato(true, true));
// console.log(verificarTipoDato(2, "Parcial"));


// ! Ejercicio 02
// Objeto
let persona = {
  nombre: "Timmy",
  apellido: "Turner",
  edad: 2,
  esArgentino: true,
}

// Funcion
function datosPersona(pmObjeto) {
  let mensaje = "";

  if (pmObjeto.edad >= 18) {

    if (pmObjeto.esArgentino) {
      mensaje = "vive en Argentina y es mayor de edad.";
    } else {
      mensaje = "NO vive en Argentina y es mayor de edad.";
    }

  } else {

    if (pmObjeto.esArgentino) {
      mensaje = "vive en Argentina y NO es mayor de edad.";
    } else {
      mensaje = "NO vive en Argentina y NO es mayor de edad.";
    }
  }

  return `${pmObjeto.nombre} ${pmObjeto.apellido} ${mensaje}`;
}
// * Resultado
// console.log(datosPersona(persona));


// ! Ejercicio Sin usar typeof
function verificacionDeTiposDeDatos(pmValor1, pmValor2) {
  if (
    ((pmValor1 === true) || (pmValor1 === false)) &&
    ((pmValor2 === true) || (pmValor2 === false))
  ) {
    return "Mismo tipo";
  }
  else if (
    ((pmValor1 === "true") || (pmValor1 === "false")) &&
    ((pmValor2 === "true") || (pmValor2 === "false"))
  ) {
    return "Mismo tipo";
  }
  else {
    return "No son del mismo tipo"
  }
}
// * Resultado
// console.log(verificacionDeTiposDeDatos(false, true));
// console.log(verificacionDeTiposDeDatos(true, false));
// console.log();
// console.log(verificacionDeTiposDeDatos("true", "false"));
// console.log(verificacionDeTiposDeDatos("true", "true"));
// console.log();
// console.log(verificacionDeTiposDeDatos(true, "true"));
// console.log(verificacionDeTiposDeDatos("true", true));
// console.log();
// console.log(verificacionDeTiposDeDatos("false", false));
// console.log(verificacionDeTiposDeDatos(false, "false"));


// ! Ejercicio 03

let destinos = [];

let brasil = {
  cantidadDeVisitas: 3,
  clima: "soleado",
  habitantes: "212 millones"
}
let rusia = {
  cantidadDeVisitas: 4,
  clima: "muy frío",
  habitantes: "144 millones"
}
let estadosUnidos = {
  cantidadDeVisitas: 1,
  clima: "nublado",
  habitantes: "329 millones"
}
console.log(destinos)
console.log();

// * Elementos al array
destinos.push(brasil, rusia, estadosUnidos);
console.log(destinos);
console.log();

// * Aumentar 1 visitas
console.log(destinos);
function siguienteViaje(pmArray) {
  for (pais of pmArray) {
    pais.cantidadDeVisitas++;
  }
}
siguienteViaje(destinos);
console.log(destinos);
