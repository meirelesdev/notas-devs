<?php

if($method === 'get') {
    
    $sql = $pdo->query("SELECT * FROM notes");
    
    if($sql->rowCount() > 0){
        $data = $sql->fetchAll(PDO::FETCH_ASSOC);
        $array['result'] = $data;
    } 
} else {
    $array['error'] = "method not allowed (only GET)";
}


require('../return.php');