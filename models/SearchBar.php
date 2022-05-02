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

        
        $sqlPrepare = $this->pdo->prepare("SELECT `name` FROM pierres WHERE `name` LIKE '%".$crystalSearch."%' ");
        $sqlPrepare->execute();
        $pierres = $sqlPrepare->fetchAll();

        $pierresJson = json_encode($pierres);
      
       return $pierresJson;
    }

    function getCrystalById(){

        // public function getResaSolo(){

            //on recup la resa seule en fonction de l'id sur la page html planning on a indiqué ds le href le get avec 'reservation.php?id_resa=$id_resa'
                //     $id_resa = $_GET["id_resa"];
                //     $sql_resa = "SELECT * FROM {$this->table} WHERE id = '$id_resa'";
                //     $get_resa = $this->pdo->prepare($sql_resa);
                //     $get_resa->execute();
                //     $result_resa = $get_resa->fetchAll();
            
            
                //     return $result_resa;
                // }

        
        $read_resa = $this->pdo->prepare("SELECT * FROM pierres WHERE `id`= '$idCrystal'");
        $read_resa->execute();
        $resa = $read_resa->fetchAll();

    }
    
}