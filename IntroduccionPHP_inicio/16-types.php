<?php declare(strict_types=1); include 'includes/header.php';

function usuarioAutenticado(bool $autenticado) : string { // void si no va a devolver nada y ocupas echos por ejemplo, ?string es opcional que salga un string
    if ($autenticado) {
        return 'El usuario esta autenticado';
    } else {
        return 'No autenticado';
    }
}

$usuario = usuarioAutenticado(true);

echo $usuario;

include 'includes/footer.php';