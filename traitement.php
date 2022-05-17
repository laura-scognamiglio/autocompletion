<?php
require_once('models/SearchBar.php');


if(!isset($_POST['search']) && $_POST['search'] !== ""){

    $emptyString = "";

    echo json_encode($emptyString);

}elseif(isset($_POST['search'])){

    $inputUser = htmlspecialchars(trim($_POST['search']));
    $modelSearch = new SearchBar;
    $searchResult = $modelSearch->getCrystals($inputUser);
    $searchResultStart = $modelSearch->getCrystalsStart($inputUser);
   
    $searchResults = array(
        "crystalsAll" => $searchResult, 
        "crystalsStart" => $searchResultStart
    );

    echo json_encode($searchResults);

}

//mettre ds un tableau les deux resulyats des requetes php et mettre ça
//en json_encode et surtout en echo 

//faire un eslse avc json vide mais avant une conditions que je peux lire afin 
//d'interpreter le statut ok/not OK 