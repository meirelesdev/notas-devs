<?php

// $db_host = 'us-cdbr-east-05.cleardb.net';
// $db_port = '3306';
// $db_name = 'heroku_8df5d5d666ba6b7';
// $db_user = 'b0f29a6f31418d';
// $db_pass = 'e736a404';

$db_host = '127.0.0.1';
$db_port = '3306';
$db_name = 'devsnotes';
$db_user = 'root';
$db_pass = 'root';

try{

    $pdo = new PDO("mysql:dbname=$db_name;host=$db_host;port=$db_port", $db_user, $db_pass);
}catch(PDOException $e){
    echo "Erro: ".$e->getMessage();
    exit;
}
header("Access-Control-Allow-Origin: *");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json');
header('HTTP/1.1 200');




?>