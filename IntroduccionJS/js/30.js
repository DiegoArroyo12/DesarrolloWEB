// Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`
    }
};

const producto = new Producto('Monitor Curvo de 49"', 800);
const producto2 = new Producto('Laptop', 300);

console.log(producto);
console.log(producto2.formatearProducto());