// Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
};

const producto = new Producto('Monitor Curvo de 49"', 800);
const producto2 = new Producto('Laptop', 300);

console.log(producto);
console.log(producto2.formatearProducto());

//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); // Heredamos el constructor
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
};

const libro = new Libro('JavaScript la Revolución', 120, '541651513218754987982');
console.log(libro);
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());