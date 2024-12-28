<?php include 'includes/header.php';

$cliente = [
    'nombre' => 'Diego',
    'saldo' => 200,
    'informacion' => [
        'tipo' => 'premium',
        'disponible' => 100
    ]
];

echo '<pre>';
var_dump($cliente);
echo '</pre>';

// echo $cliente['nombre'];
// echo $cliente['informacion']['tipo'];
$cliente['codigo'] = 123456789;

echo '<pre>';
var_dump($cliente);
echo '</pre>';

include 'includes/footer.php';