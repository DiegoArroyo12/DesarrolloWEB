// querySelector

const heading = document.querySelector(".header__texto h2"); // 0 o 1 Elementos
heading.textContent = 'Nuevo Heading'
console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto Para Enlace';
enlaces[0].href = 'https://google.com';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');
console.log(enlaces[0]);

// getElementById
const heading2 = document.getElementById("heading");
console.log(heading2);

// createElement
const nuevoEnlace = document.createElement("A"); // El nombre de la etiqueta en mayúsculas

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto 
nuevoEnlace.textContent = 'Un Nuevo Enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

console.log(1);

window.onload = function () {
    console.log(3);
};

// window hace referencia todo el contenido de la página, document hace más referencia al HTML
window.addEventListener('load', function () {
    console.log(2);
}); // load espera a que el JS y los archivos que dependen del HTML estén listos

document.addEventListener('DOMContentLoaded', function () { // Solo espera que se descargue el HTML, pero no espera al CSS o las imágenes
    console.log(4);
});

console.log(5);

window.onscroll = function () {
    console.log('scrolling...'); // Detecta si se hace scroll
};


// Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();

    // Validar un formulario

    console.log('Enviando Formulario');
})