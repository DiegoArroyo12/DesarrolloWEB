// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
};

// Object Constuctor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const cliente = new Cliente('Diego', 'Arroyo');

console.log(cliente);

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
};

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

// Crear funciones que solo se utilizan en un objeto en específico
function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tiene un precio de: $${producto.precio}`;
}

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3);

console.log(formatearProducto(producto2));

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }