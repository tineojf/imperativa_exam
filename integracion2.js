/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

// ! CODIGO
function encontrarMultiplos(numero, limite) {
  let arreglo = [];

  for (let i = numero; i < limite; i += numero) {
    arreglo.push(i);
  }

  return arreglo;
}

console.log(encontrarMultiplos(5, 50));





/*
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//! CODIGO
let estudiantes = [
  {
    nombre: "Tineo",
    notas: [10, 10, 10],
    aprobado: false,
    metodoAprobado: function () {
      let suma = 0;

      for (let nota of this.notas) {
        suma += nota;
      }
      let promedio = suma / this.notas.length;

      return promedio >= 70 ? this.aprobado = true : this.aprobado = false
    }
  },
  {
    nombre: "Tatiana",
    notas: [80, 90, 76],
    aprobado: false,
    metodoAprobado: function () {
      let suma = 0;

      for (let nota of this.notas) {
        suma += nota;
      }
      let promedio = suma / this.notas.length;

      return promedio >= 70 ? this.aprobado = true : this.aprobado = false
    }
  },
  {
    nombre: "Luis",
    notas: [90, 80, 90],
    aprobado: false,
    metodoAprobado: function () {
      let suma = 0;

      for (let nota of this.notas) {
        suma += nota;
      }
      let promedio = suma / this.notas.length;

      return promedio >= 70 ? this.aprobado = true : this.aprobado = false
    }
  },
  {
    nombre: "Avril",
    notas: [62, 92, 88],
    aprobado: false,
    metodoAprobado: function () {
      let suma = 0;

      for (let nota of this.notas) {
        suma += nota;
      }
      let promedio = suma / this.notas.length;

      return promedio >= 70 ? this.aprobado = true : this.aprobado = false
    }
  }
];

// Calcular si los estudiantes aprobaron o no
let estudiantesAprobados = 0;

for (let alumno of estudiantes) {
  alumno.metodoAprobado();
  if (alumno.aprobado) {
    estudiantesAprobados += 1;
  }
}
console.log("Estudiantes aprobados")
console.log(estudiantesAprobados);
console.log()

// Imprimir estado de aprobación de los estudiantes
estudiantes[0].metodoAprobado();
console.log(estudiantes[0].aprobado);



/*
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un 
bucle while para 
calcular la suma de los números pares en el arreglo.

*/

// ! CODIGO
let arregloSuma = [15, 120, 23, 20, 2, 6];
let sumaTotal = 0;

let iterable = 0;

while (iterable < arregloSuma.length) {
  if (arregloSuma[iterable] % 2 == 0) {
    sumaTotal += arregloSuma[iterable];
  }
  iterable++;
}

console.log(sumaTotal);





/*
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y 
devuelva el producto de los números impares.

Respuesta y Explicación:

*/

// ! CODIGO

let arregloProducto = [15, 120, 23, 20, 2, 6];

function calcularProductoImpares(pm_arreglo) {
  let productoTotal = 1;
  let iterable2 = 0;

  while (iterable2 < pm_arreglo.length) {
    if (pm_arreglo[iterable2] % 2 != 0) {
      productoTotal *= pm_arreglo[iterable2];
    }
    iterable2++;
  }

  return productoTotal
}


console.log(calcularProductoImpares(arregloProducto));





/*
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con 
propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar
 según el año del vehículo. 
 Si el año es anterior a 2010, el impuesto es del 10% del precio;
  si es posterior o igual a 2010, el impuesto es del 5%.

*/

//CODIGO


let vehiculo = {
  marca: "BMW",
  modelo: "X5",
  anio: 2015,
  precio: 100000,
  impuesto: 0,

  calcularImpuesto: function () {
    if (this.anio < 2010) {
      this.impuesto += 0.1 * this.precio;
    } else {
      this.impuesto += 0.05 * this.precio;
    }
  }
}

vehiculo.calcularImpuesto();
console.log(vehiculo.impuesto);