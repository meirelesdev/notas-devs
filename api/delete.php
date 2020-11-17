<?php
require('../config.php');

$method = strtolower($_SERVER['REQUEST_METHOD']);

if($method === 'delete' ) {

    parse_str(file_get_contents('php://input'), $input);
    // $id = (!empty($input['id'])) ? $input['id'] : null; 
    $id = $input['id'] ?? null;
    $id = filter_var($id);

    if($id){

        $sql = $pdo->prepare("SELECT * FROM notes WHERE id = :id");
        $sql->bindValue(':id', $id);
        $sql->execute();

        if($sql->rowCount() > 0){
        
            $sql = $pdo->prepare("DELETE FROM notes WHERE id = :id");
            $sql->bindValue(':id', $id);
            $sql->execute();
            
            $array['result'] = "Register deleted white success.";
        } else {
            $array['error'] = "not found id.";
        }
    } else {
        $array['error'] = "fields not filled";
    }    
} else {
    $array['error'] = "method not allowed (only DELETE)";
}


require('../return.php');