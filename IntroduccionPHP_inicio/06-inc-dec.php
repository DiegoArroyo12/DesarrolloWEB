<?php include 'includes/header.php';

$numero1 = 30;

// Esto imprime el 30 pero hace que para la próxima vez que se use esa variable, será 1
echo $numero1++;

// Esto si hace que salga 31, pero en este caso como ya le habíamos aumentado uno al final de la línea anterior
// saldrá 32, esto aplica para restar también.
echo ++$numero1;

include 'includes/footer.php';