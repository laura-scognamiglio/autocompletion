
<?php

class Database{

    protected $pdo;

    function __construct(){
        $dns = 'mysql:host=localhost;dbname=autocompletion';
    
                try{
                    $pdo = new PDO($dns, 'root', 'root', 
                    [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                    ]);
                    // echo "connexion PDO opérationnelle !";
    
                } catch(PDOException $e){
                    echo "error : " . $e->getMessage();
                }
                // var_dump($pdo);
                $this->pdo = $pdo;
    }
}
