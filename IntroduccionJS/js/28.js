// This

const reservacion = {
    nombre: 'Diego',
    apellido: 'Arroyo',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`); // Aquí no se puede utilizar un arrow function
        // console.log(`El cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`); Esta es otra sintaxis pero no es muy práctica
    }
};

// Estas son las variables que toma un arrow function ya que toma las globales y no las del arreglo
window.nombre = 'Un nombre';
window.total = 'Un total';  // Si no se asigna se muestra Undefined

const reservacion2 = {
    nombre: 'Diego',
    apellido: 'Arroyo',
    total: 5000,
    pagado: false,
    informacion: () => {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`); // Aquí se muestran las globales y no las del arreglo
    }
};

console.log(reservacion.informacion());
console.log(reservacion2.informacion());