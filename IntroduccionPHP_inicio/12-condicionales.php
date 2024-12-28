<?php include 'includes/header.php';

$autenticado = true;
$admin = false;

if($autenticado || $admin) {
    echo 'Usuario autenticado correctamente';
} else {
    echo 'Usuario no autenticado, inicia sesión';
}

// If anidado...
$cliente = [
    'nombre' => 'Diego',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'Premium'
    ]
];

if (!empty($cliente)) {
    echo 'El arreglo de cliente no esta vacío';

    if ($cliente['saldo'] > 0) {
        echo 'El cliente tiene saldo disponible';
    } else {
        echo 'No hay saldo';
    }
}

// Else if
if($cliente['saldo'] > 0){
    echo 'EL cliente tiene saldo';
} else if($cliente['informacion']['tipo' == 'Premium']){
    echo 'El cliente es Premium';
} else {
    echo 'No hay cliente definido o no tiene saldo o no es premium';
}

// Switch
$tecnologia = 'PHP';

switch ($tecnologia) {
    case 'PHP':
        echo 'PHP, un excelente lenguaje';
        break;
    case 'JavaScript':
        echo 'Genial, el lenguaje de la web';
        break;
    case 'HTML':
        echo 'Emmm..';
        break;
    default:
        echo 'Algún lenguaje que no se cual es';
        break;
}

include 'includes/footer.php';