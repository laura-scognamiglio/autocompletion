<?php
$var = (file_get_contents('php://input'));

// require_once('models/Database.php');
require_once('models/SearchBar.php');

?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/puzzy-search/dist/index.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="pierres.json"></script>
    <script src="script3.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Search bar</title>

</head>
<body>
    <header>
            <h1>Crystal clear</h1>
            <form action="" method="post" class="wrapper">
                
                    <div class="search-input">
                        <label for="search">search a crystal</label>
                        <input  type="text" name="search" placeholder="search...">
                        <div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                            
                        <div class="results ">
                            <li>test
                            </li>
                            <li>test
                            </li>
                            <li>test
                            </li>
                        </div>
                    </div>
            
            </form>
  
    </header>
</body>
</html>


<?php

@$searchInput = htmlspecialchars($_POST['search']);
if (isset($searchInput)){

    $searchTest = new SearchBar;
    $search = $searchTest->getCrystals(@$searchInput);
    echo ($search);
    // echo $search;
}
