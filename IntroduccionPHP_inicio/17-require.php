<?php require 'includes/header.php';

/* require es más estricto que include, ya que por si include detecta un error pequeño se puede seguir ejecutando */
/* pero require no, y también existe require_once el cual busca si ya se incluyo antes el código que dice. */

require '15-funciones.php'; // Llamamos todo lo del archivo 

iniciarApp();

include 'includes/footer.php';