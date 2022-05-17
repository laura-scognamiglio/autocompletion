<?php


require_once('models/SearchBar.php');

// $search = $_GET['search'];

$model = new SearchBar();
$elements=$model->getCrystals(@$_GET['search']);

// var_dump($search);

foreach($elements as $element){
   $itemId = $element['id'];
   $itemName = $element['name'];

    echo "<li><a href=../element.php?id=".$itemId.">".$itemName."</a></li>";
    // var_dump($item);
}