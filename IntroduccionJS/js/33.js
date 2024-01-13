// document: Hace referencía a todo lo del html de la página
const boton = document.querySelector('#boton'); // Para seleccionar algún elemento especifico se usa esta sintaxis con el gato
// Registra eventos al botón
boton.addEventListener('click', function() { // Recibe dos parámetros, el evento y lo que se ejecutará
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es: ', resultado));
});


if (Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/logo',
        body: 'Esta es una molesta notificación'
    })
}