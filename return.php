<?php

header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// header("Content-Type: application/json");
header("Access-Control-Allow-Origin: * ");

echo json_encode($array);
exit;

