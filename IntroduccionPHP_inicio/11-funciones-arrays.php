<?php include 'includes/header.php';

// in_array - Buscar elementos en un arreglo
$carrito = ['Tablet', 'Computadora', 'Televisión'];

var_dump(in_array('Tablet', $carrito));
var_dump(in_array('Audifonos', $carrito));

// Ordenar elementos de un arreglo
$numeros = array(1,3,4,5,1,2);
sort($numeros); // De Menor a Mayor
rsort($numeros); // De Mayor a Menor

echo '<pre>';
var_dump($numeros);
echo '</pre>';

// Ordenar arreglo asociativo
$cliente = array(
    'saldo' => 200,
    'tipo' => 'Premium',
    'nombre' => 'Diego'
);

echo '<pre>';
var_dump($cliente);
echo '</pre>';

asort($cliente); // Ordena por valores (orden alfabético)
arsort($cliente); // Ordena por valores (Z primero)
ksort($cliente); // Ordena por llaves (orden alfabético)
krsort($cliente); // Ordena por llabes (orden alfabético, De la Z a la A)

include 'includes/footer.php';