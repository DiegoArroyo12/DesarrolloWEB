// Arrow Functions
const sumar = (n1, n2) => console.log(n1 + n2);
sumar(5,10);

// Esta es la sintaxis default
// const aprendiendo = (tecnologia) => {
//     console.log(`Aprendiendo ${tecnologia}`);
// };

// Sintaxis cuando solo es un parámetro y una sola instrucción
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript');



// Mejorando archivo 16

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
meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    };
})

let resultado

// Some: Se utiliza cuando es un array de objetos
resultado = carrito.some( producto => producto.name === 'Celular');

// Reduce
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

// Filter
resultado = carrito.filter( (producto) => producto.precio > 400);

resultado = carrito.filter( (producto) => producto.nombre === 'Celular');

console.log(resultado);