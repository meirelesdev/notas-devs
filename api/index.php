<?php
require('config.php');

$array = [
    "error" => "",
    "result" => []
    ];

$method = strtolower($_SERVER['REQUEST_METHOD']);
if (isset($_GET['url']) && !empty($_GET['url'])) {
    $url = $_GET['url'];
    switch ($url) {

        case 'cadastrar':            
            require "insert.php";
        break;

        case 'listar':
            require "getall.php";
        break;

        case 'deletar':
            require "delete.php";
        break;

        case 'atualizar':
            require "update.php";
        break;

        case 'exibir':
            require "get.php";
            break;
        case 'ping':
            require "ping.php";
            break;
    }
} else {
    require "getall.php";
}
