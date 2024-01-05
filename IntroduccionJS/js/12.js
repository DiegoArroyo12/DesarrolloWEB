// "use strict"; // Correr JS es modo estricto
// Objetos
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.freeze(producto) // Freeze y seal no permiten agregar ni eliminar
Object.seal(producto) // Permite modificar las propiedades existentes

producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));

console.log(producto);