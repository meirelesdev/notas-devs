<?php

$db_host = 'us-cdbr-east-05.cleardb.net';
$db_port = '3306';
$db_name = 'heroku_8df5d5d666ba6b7';
$db_user = 'b0f29a6f31418d';
$db_pass = 'e736a404';

$pdo = new PDO("mysql:dbname=$db_name;host=$db_host;port=$db_port", $db_user, $db_pass);



$array = [
    "error" => "",
    "result" => []
    ];
?>