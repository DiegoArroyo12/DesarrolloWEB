// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

// Constructor
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];
console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]);

// Conocer la extensión de un arreglo
console.log(meses.length);

// Iterador del arreglo
numeros.forEach( function(numero) {
    console.log(numero);
})