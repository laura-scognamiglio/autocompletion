<?php
$var = file_get_contents('php://input');
require_once('models/Database.php');
require_once('models/SearchBar.php');

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Search bar</title>

</head>
<body>
    <header>
        
            <form action="" method="post" class="searchBar">
                <div class=".wrapper">
                    <label for="search"> search a crystal</label>
                    <input type="text" id="search" name="search" placeholder="search...">
                    <button type="submit" id="searchBtn" name="myBtn"><i class="fa fa-search"></i>Search</button>
                    <div class="results">
                        <ul>
                        </ul>
                    </div>
                </div>
            </form>
  
    </header>
</body>
</html>


<?php

$con = new Database;
// $con = getpdo();


// $searchTest->getCrystals();

// echo $searchTest;

$submit = $_POST['myBtn'];
$searchInput = $_POST['search'];

$searchTest = new SearchBar;
$search = $searchTest->getCrystals();

if (isset($submit))
{

    // var_dump($searchInput);
}
// var_dump($_POST['search']);





// }