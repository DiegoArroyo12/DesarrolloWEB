<?php include 'includes/header.php';

/* Las variables inician con signo de dólares */
$nombre = 'Diego';

echo $nombre;

var_dump($nombre);

/* Define es una constante */
define('constante', 'Este es el valor de la constante');

echo constante;

/* Otra forma */
const constante2 = "Hola 2";
echo constante2;

include 'includes/footer.php';