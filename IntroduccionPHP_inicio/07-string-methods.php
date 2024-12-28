<?php include 'includes/header.php';

$nombreCliente = 'Diego Arroyo';

// Conocer extensión de un string
echo strlen($nombreCliente);
var_dump($nombreCliente);

// Eliminar espacios en blanco
$texto = trim($nombreCliente);
echo strlen($nombreCliente);

// Convertirlo en mayúsculas
echo strtoupper($nombreCliente);

// Convertirlo en minúsculas
echo strtolower($nombreCliente);

$mail1 = 'correo@correo.com';
$mail2 = 'Correo@correo.com';

var_dump(strtolower($mail1) === strtolower($mail1));

echo str_replace('Diego', 'D', $nombreCliente);

// Revisar si un string existe o no 
echo strpos($nombreCliente, 'Diego');

$tipoCliente = 'Premium';

echo '<br>';

echo 'El Cliente ' . $nombreCliente . ' es ' . $tipoCliente;

// Esta manera solo sirve con comillas dobles
echo "El Cliente {$nombreCliente} es {$tipoCliente}";

include 'includes/footer.php';