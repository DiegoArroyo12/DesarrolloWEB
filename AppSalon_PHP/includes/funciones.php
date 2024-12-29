<?php

function obtenerServicios() {
    try {
        // Importar Credenciales
        require 'database.php';
        // Consulta SQL
        $sql = "SELECT * FROM servicios;";
        // Realizar la consulta
        $consulta = mysqli_query($db, $sql);
        return $consulta;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

obtenerServicios();