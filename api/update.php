<?php
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");

if($method === 'put' ) {
    
   
    $id = filter_input(INPUT_GET, 'id');
    $conteudo = [];
    $conteudo = json_decode(file_get_contents('php://input'), true);

    $title = $conteudo['title'];
    $body = $conteudo['body'];

    if($id && $title && $body){

        $sql = $pdo->prepare("SELECT * FROM notes WHERE id = :id");
        $sql->bindValue(':id', $id);
        $sql->execute();

        if($sql->rowCount() > 0){
            $nota = $sql->fetch(PDO::FETCH_ASSOC);
            
            $sql = $pdo->prepare("UPDATE notes SET title = :title, body = :body WHERE id = :id");
            
            $sql->bindValue(':id', $id);
            $sql->bindValue(':title', $title);
            $sql->bindValue(':body', $body);
            $sql->execute();
            
            $array['result'] = [
                'id' => $id,
                'title' => $title,
                'body' => $body
            ];
        } else {
            $array['error'] = "not found id.";
        }
    } else {
        $array['error'] = "fields not filled";
    }    
} else {
    $array['error'] = "method not allowed (only PUT)";
}


require('../return.php');