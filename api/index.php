<?php
require('../config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);
if (isset($_GET['url']) && !empty($_GET['url'])) {
    $url = $_GET['url'];
    switch ($url) {
        // ok
        case 'cadastrar':            
            require "insert.php";
        break;
        // ok
        case 'listar':
            require "getall.php";
        break;
        // ok
        case 'deletar':
            require "delete.php";
        break;
        // ok
        case 'atualizar':
            require "update.php";
        break;
        // ok
        case 'exibir':
            require "get.php";
            break;
        case 'ping':
            require "ping.php";
            break;
    }
} else {
    // ok
    require "getall.php";
}
