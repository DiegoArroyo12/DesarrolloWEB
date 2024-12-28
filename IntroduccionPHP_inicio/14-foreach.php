<?php include 'includes/header.php';

// For Each
$clientes = array('Diego', 'Juan', 'Karen');

foreach ($clientes as $cliente) {
    echo $cliente . '<br>';
}

$cliente = [
    'nombre' => 'Diego',
    'saldo' => 200,
    'tipo' => 'Premium'
];

foreach($cliente as $key => $valor){
    echo $key . ' - ' . $valor . '<br>';
}

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Television 24"',
        'precio' => 300,
        'disponible' => true
    ],
    [
        'nombre' => 'Monitor Curso',
        'precio' => 400,
        'disponible' => false
    ]
];

foreach($productos as $producto){ ?>
    <li>
        <p>Producto: <?php echo $producto['nombre']; ?></p>
        <p>Precio: <?php echo '$ ' . $producto['precio']; ?></p>
        <p><?php echo ($producto['disponible'] == true) ?  'Disponible' : 'No Disponible'; ?></p> <!-- Operador Terneario -->
    </li>
    <?php
}

include 'includes/footer.php';