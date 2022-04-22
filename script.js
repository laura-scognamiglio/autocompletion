document.addEventListener("DOMContentLoaded", function () {
    let searchable = [
        'Elastic',
        'PHP',
        'Something about CSS',
        'How to code',
        'JavaScript',
        'Coding',
        'Some other item',
      ];
      
    // var inputs = document.getElementById("myForm");
    //regarder json stringify 
    
    var form = document.querySelector('.searchBar');
    var button = document.getElementById('searchBtn');
    var searchInput = document.getElementById('search');
    var resultsWrapper = document.querySelector('.results');
    var searchWrapper = document.querySelector('.wrapper');

    // fetch('traitement.php', {
    //     method: 'POST',
    //     body:formData
    fetch('autocompletion.json',{
        method: 'GET',
        body: JSON.stringify(),
    })
//methode fetch response.json
//texte brut
    .then(function (response) {
            return response.text();
    })
    .then(function (body) {
        console.log(body);
    })
    .catch(function (error){
        console.log('error:',error);
    })

    searchInput.addEventListener('keyup', (e) => {
        //fetch les results fichier json ou dialogue avc bdd? var results = []
        
        let results = [];
        let input = searchInput.value;
        if(input.length){
            results = searchable.filter((item) => {
                return item.toLowerCase().includes(input.toLowerCase());
            });
        }
        renderResults(results);
    });

    function renderResults(results) {
        if(!results.length){
            return searchWrapper.classList.remove('show');
        }

        const content = results
        .map((item) => {
        return `<li>${item}</li>`;
        })
        .join('');
        searchWrapper.classList.add('show');
        resultsWrapper.innerHTML = `<ul>${content}</ul>`;
    }


})
     
 


  
  