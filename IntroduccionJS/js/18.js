// JavaScript se ejecuta dos veces, primero lee el archivo y declara las funciones y en la segunda vuelta las llama o ejecuta

// Si funciona porque está bien declarado como una función
sumar();
function sumar() {
    console.log(10 + 10);   
}

// No funciona porque está declarado como una variable
sumar2();
const sumar2 = function() {
    console.log(3 + 3);
};