<?php

require_once('models/SearchBar.php');


$id = $_GET['id'];

$model = new SearchBar();
$element=$model->getCrystalById($id);
// var_dump($element); 
$pic = $element[0]['img'];

// echo $element[0]['img'];
// echo $element[0]['name'];

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
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Crystal</title>
</head>
<body>
    <main>
        </article>
            <section class="picSection">

                <div class="titlePic">
                    <h4><?= $element[0]['name'];?></h4>
                    <h6><?= $element[0]['tag'];?></h6>
                </div>
                <img class="img" src="./asset/img/<?=$pic?>" alt="">
            </section>
        <article>
    </main>
</body>
</html>