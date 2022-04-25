<?php

require_once('Database.php');

class SearchBar extends Database{

   

    public function __construct() {
        parent::__construct();
        
    }

    // $query = mysqli_query($conn,"SELECT * FROM content_ref_table,course_ref_table 
    // WHERE title LIKE '%".$search_term."%' OR description LIKE '%".$search_term."%' 
    // and content_ref_table.course_id = course_ref_table.course_id 
    // and courses = '".$selected_course."' LIMIT 0 , 30")

    function getCrystals($crystalSearch){
        
        $sqlPrepare = $this->pdo->prepare("SELECT * FROM pierres WHERE `name` LIKE '%".$crystalSearch."%' OR `tag1` LIKE '%".$crystalSearch."%'");
        $sqlPrepare->execute();
        $pierres = $sqlPrepare->fetchAll();

        foreach($pierres as $pierre){
            echo ("<p class = crystals> {$pierre['name']} {$pierre['tag1']}  </p>");
            // echo ("<p class = crystals> </p>");
        }
    
        // echo"crystal ok";
        return $pierres;
    }
    
}