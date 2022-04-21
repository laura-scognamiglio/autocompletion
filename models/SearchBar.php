<?php

require_once('Database.php');

class SearchBar extends Database{

   

    public function __construct() {
        parent::__construct();
        
    }

    function getCrystals(){
        
        $sqlPrepare = $this->pdo->prepare("SELECT * FROM pierres");
        $sqlPrepare->execute();
        $pierres = $sqlPrepare->fetchAll();
    
        // print_r ($pierres);
    
        // foreach ($pierres as $pierre){
        // print_r ($pierre['name']) ;
        // }
        // echo "getCrystals";
        return $pierres;
    }
    
}