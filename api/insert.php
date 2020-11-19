<?php

if($method === 'post' ) {
    
    $conteudo = [];
    $conteudo = json_decode(file_get_contents('php://input'), true);

    $title = $conteudo['title'];
    $body = $conteudo['body'];
    
    if($title && $body){    
        
        $sql = $pdo->prepare("INSERT INTO notes (title, body) VALUES(:title, :body)");
        
        $sql->bindValue(':title', $title);
        $sql->bindValue(':body', $body);
        $sql->execute();

        $id = $pdo->lastInsertId();

        $array['result'] = [
            'id' => $id,
            'title' => $title,
            'body' => $body
        ];

    } else {
        $array['error'] = "fields not filled";
    }    
} else {
    $array['error'] = "method not allowed (only POST)";
}


require('return.php');