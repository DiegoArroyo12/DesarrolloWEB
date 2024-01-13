// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron Descargados');
        }, 5000);

    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos... espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron Descargados');
        }, 5000);

    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos(); // Esta línea se bloquea hasta que el await anterior se ejecute
        // Este código depende de que se ejecute la función descargarNuevosClientes
        // console.log(clientes);

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
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