// Métodos Exclusivos de Arreglos
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

// ForEach

carrito.forEach(function(producto) {
    console.log(producto.precio);
});

carrito.forEach( producto => console.log(producto.nombre) ); // Itera

// Map
const arreglo = carrito.map( producto => `${producto.nombre} - ${producto.precio}` ); // Crear un nuevo arreglo

console.log(arreglo);