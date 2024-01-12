const usuarioAutenticado = new Promise( (resolve, reject) => { // Resolve y Reject se llaman por defecto
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión'); // EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado)) // Usuario Autenticado
    .catch( error => console.log(error));

console.log(usuarioAutenticado); // Promise {<fulfilled>: 'Usuario Autenticado'}

// En los Promises existen 3 valores
// Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilled: Ya se cumplió
// Rejected: Se ha rechazado o no se puedo cumplir