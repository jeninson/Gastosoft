<?php
    //User: userbdapp
    //Password: @ppDataBase3306
    $host = "127.0.0.1";
    $user = "userbdapp";
    $password = "@ppDataBase3306";
    $database = "dblidia";

    $conn = mysqli_connect($host, $user, $password, $database);

    if (!$conn) {
        die("Error en la conexión: " . mysqli_connect_error());
    }

    echo "Conexión exitosa a la base de datos.";
?>