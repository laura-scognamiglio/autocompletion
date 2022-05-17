<?php
require_once('models/SearchBar.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css" media="screen">
    <title>Document</title>
</head>
<body>
    <?php 


$model = new SearchBar();
$elements=$model->getCrystals(@$_GET['search']);

// var_dump($search);

foreach($elements as $element){
   $itemId = $element['id'];
   $itemName = $element['name'];

    echo "<li><a href=../element.php?id=".$itemId.">".$itemName."</a></li>";
  
}
    ?>
</body>
</html>