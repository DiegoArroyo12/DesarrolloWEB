<?php declare(strict_types=1); include 'includes/header.php';

/* declare(strict_types=1) - Activa el tipado fuerte en el código */

function sumar(int $numero1 = 0, int $numero2 = 0) {
    echo $numero1 + $numero2;
}

// Esta mal porque pide un entero y mando un string
//sumar(20, 'hola'); 

sumar(numero2: 20); // Parámetros nombrados

function iniciarApp() {
    echo 'Iniciando nuestra app';
}

include 'includes/footer.php';