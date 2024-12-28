<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Televisión 24"',
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curso',
        'precio' => 400,
        'disponible' => false
    ]
];

echo '<pre>';
var_dump($productos);

// Arreglo a String
$json = json_encode($productos, JSON_UNESCAPED_UNICODE); // Segundo parámetro para los acentos

$json_array = json_decode($json);

var_dump($json);
var_dump($json_array);
echo '</pre>';

include 'includes/footer.php';