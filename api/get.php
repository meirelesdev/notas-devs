<?php
require('../config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);
$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if($method === 'get' ) {
    
    if($id){    
        $sql = $pdo->prepare("SELECT * FROM notes WHERE id = :id");
        
        $sql->execute([
            ':id' => $id
        ]);
        
        if($sql->rowCount() > 0){
            $data = $sql->fetch(PDO::FETCH_ASSOC);
            $array['result'] = $data;
        }else{
            $array['error'] = "id not found.";
        }
    } else{
        $array['error'] = "id not send.";
    }
} else {
    $array['error'] = "method not allowed (only GET)";
}


require('../return.php');