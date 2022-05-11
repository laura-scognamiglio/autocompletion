document.addEventListener("DOMContentLoaded", function () {

    //CDN puzzy-search contient regex et correction/suggestion, 
    //possibilité de l'intallé via npm . 
    // const { search, suggest, regex } = require('puzzy-search')
    // const { search, suggest, regex } = puzzySearch // for CDN

    // const sentence = 'You want the web server to support four of the most popular programming paradigms.'

    // const str = 'puppular programmng paradim'

    // search(str, sentence) // true

    // suggest(str, sentence) // popular programming paradigm

    // regex(str) // new RegExp(...puzzy...)

    // sentence.match(regex(str)) !== null // true



      
    // var inputs = document.getElementById("myForm");
    //regarder json stringify 
    
 
   
    // var resultsWrapper = document.querySelector('.results');
    // var searchWrapper = document.querySelector('.wrapper');
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".results");

    inputBox.addEventListener('keyup', (e) => {
        //fetch les results fichier json ou dialogue avc bdd? var results = []
        //fetch a l'interieur de l'event 
        var searchInputValue = inputBox.value

        fetch('index.php',{
            method: 'GET',
            //okay mais je parse quoi? 
            body: searchInputValue,
        })
    //methode fetch response.json
    //texte brut
    //!empecher le comportement par default et ne pas recharger la page 
        .then(function (response) {
            //response.json pour que les infos soient traiter 
                return response.json(searchInput);
        })
        .then(function (body) {
            
        function renderResults(results) {
            let input = searchInput.value;
            if(!results.length){
            // return searchWrapper.classList.remove('show');
        }

            const content = results.map((item) => {
                return `<li>${item}</li>`;
            }).join('');
            searchWrapper.classList.add('show');
            resultsWrapper.innerHTML = `<ul>${content}</ul>`;
    }
        }).catch(function (error){
            console.error('error:',error);
        })
    

        // let results = [];
        // 
        // if(input.length){
        //     results = idontknow.filter((item) => {
        //         return item.toLowerCase().includes(input.toLowerCase());
        //     });
        // }
        // renderResults(results);
    });



})
     
 


  
  