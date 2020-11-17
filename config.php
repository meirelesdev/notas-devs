<?php

$db_host = 'localhost';
$db_port = '3306';
$db_name = 'devsnotes';
$db_user = 'root';
$db_pass = 'root';

$pdo = new PDO("mysql:dbname=$db_name;host=$db_host;port=$db_port", $db_user, $db_pass);



$array = [
    "error" => "",
    "result" => []
    ];
?>