const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Televisión 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

// forEach
meses.forEach(function (mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    };
})

// Includes
const resultado = meses.includes('Marzo');
console.log(resultado);

// Some: Se utiliza cuando es un array de objetos
let resultado2 = carrito.some(function (producto) {
    return producto.name === 'Celular'
});

// Array functions
// resultado2 = carrito.some(producto => producto.nombre === 'Celular');
console.log(resultado2);

// Reduce
resultado2 = carrito.reduce(function (total, producto) {
    return total + producto.precio
}, 0); // El 0 es el valor inicial

console.log(resultado);

// Filter
resultado2 = carrito.filter(function (producto) {
    return producto.precio > 400; 
});

resultado2 = carrito.filter(function (producto) {
    return producto.nombre === 'Celular'
});

console.log(resultado2);