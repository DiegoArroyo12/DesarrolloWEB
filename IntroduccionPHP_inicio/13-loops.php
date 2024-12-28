<?php include 'includes/header.php';

// While
$i = 0; // Inicializador

while ($i < 10) {
    echo $i . '<br>';

    $i++; // Incremento
}

// Otra manera de hacer el while es:
while ($i < 10):
    echo $i . '<br>';

    $i++;
endwhile;

// Do While
$i = 100;

do {
    echo $i . '<br>';

    $i++;
} while ($i < 10);

// For
for ($i=0; $i < 10; $i++) { 
    echo $i . '<br>';
}

/* 
    3 imprimir Fizz
    5 imprimir Buzz
    3 y 5 imprimir Fizz Buzz
*/

for ($i=0; $i < 1000; $i++) { 
    if ($i % 3 === 0 && $i % 5 === 0) {
        echo $i . ' - Fizz Buzz <br>';
    }else if ($i % 3 === 0) {
        echo $i . ' - Fizz <br>';
    } else if ($i % 5 === 0) {
        echo $i . ' - Buzz <br>';
    } else {
        echo $i . '<br>';
    }
}

include 'includes/footer.php';