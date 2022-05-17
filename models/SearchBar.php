<?php

require_once('Database.php');

class SearchBar extends Database{

   

    public function __construct() {
        parent::__construct();
        
    }


    function getCrystals($crystalSearch){

        //pour une recherche de correspondance lettreé dans la BDD utilisé le selecteur LIKE 
        //niveau securité mettre les variables attendus dans le execute
        //retourner un json_encode 

        
        $sqlPrepare = $this->pdo->prepare("SELECT `name`, `id` FROM pierres WHERE `name` LIKE '%".$crystalSearch."%' ");
        $sqlPrepare->execute();
        $pierres = $sqlPrepare->fetchAll();
      
       return $pierres;
    }

    function getCrystalsStart($crystalSearch){

        $sqlPrepare = $this->pdo->prepare("SELECT `name`, `id` FROM pierres WHERE `name` LIKE '$crystalSearch%'  ");
        $sqlPrepare->execute();
        $pierresStart = $sqlPrepare->fetchAll();
    
       return $pierresStart;
    }

    function getCrystalById($id){

        $sqlPrepare = $this->pdo->prepare("SELECT * FROM pierres WHERE id=:id");
            $sqlPrepare->execute(['id' => $id]);
            $pierreId = $sqlPrepare->fetchAll();

        return $pierreId;

    }
    
}