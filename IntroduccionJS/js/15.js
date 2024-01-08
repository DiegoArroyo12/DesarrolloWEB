const numeros = [10,20,30,40,50];
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

// Agregamos un nuevo elemento
numeros[5] = 60;
console.table(numeros);

// Modificamos uno existente
numeros[2] = 100;
console.table(numeros);

// Push
numeros.push(60, 70, 80); // Agrega al final
numeros.unshift(-10, -20, -30); // Agrega al inicio

meses.pop(); // Elimina el último elemento del arreglo
meses.unshift(); // Elimina el primer elemento del arreglo
meses.splice(2, 1) // Indice y cuántos elementos quieres eliminar a partir de ahí

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];

console.log(numeros);