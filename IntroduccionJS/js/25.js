const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break; // Siempre debe finalizar con un break

    case 'cheque':
        console.log('El usuario va a pagar con cheque, reisaremos los fondos primero');
        break;

    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;

    default:
        console.log('Aún no haz pagado');
        break;
}