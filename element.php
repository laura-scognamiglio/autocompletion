<?php
require_once('models/SearchBar.php');

if(!empty($_POST['search'])){

    $inputUser = htmlspecialchars(trim($_POST['search']));
    $modelSearch = new SearchBar;
    $searchResult = $modelSearch->getCrystals($inputUser);
    $searchResultStart = $modelSearch->getCrystalsStart($inputUser);
   
    $searchResults = array(
        "crystalsAll" => $searchResult, 
        "crystalsStart" => $searchResultStart
    );
    echo json_encode($searchResults);
    // echo json_encode($searchResultStart);
}

//mettre ds un tableau les deux resulyats des requetes php et mettre ça
//en json_encode et surtout en d'echo 