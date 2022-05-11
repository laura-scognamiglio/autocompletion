<?php
require_once('models/SearchBar.php');

if(!empty($_POST['search'])){

    $inputUser = htmlspecialchars(trim($_POST['search']));
    $modelSearch = new SearchBar;
    $searchResult = $modelSearch->getCrystals($inputUser);
    $searchResultStart = $modelSearch->getCrystalsStart($inputUser);
    // var_dump($searchResult);
    echo json_encode($searchResult);
}

//mettre ds un foutu tableau les deux resulyats des requetes php et mettre ça
//en json_encode et surtout en ptn d'echo 