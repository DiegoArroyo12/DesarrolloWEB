// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron Descargados');
        }, 5000);

    });
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        // Este código depende de que se ejecute la función descargarNuevosClientes
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
};

app();

// setTimeout( function() {
//     console.log('Set timeout... Una sola vez');
// }, 1000);

// setInterval( function() {
//     console.log('Interval... Varias veces, intervalos de 3 segundos');
// }, 3000); 