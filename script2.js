document.addEventListener("DOMContentLoaded", function (){

    async function fetchFile(){
        var data = await fetch('pierres.json');
        // console.log(data)
        var dataJson = data.json();
        console.log(dataJson)
       
    }
    
    
    var searchInput = document.getElementById('search');
    var resultsWrapper = document.querySelector('.results');
    var searchWrapper = document.querySelector('.wrapper');
    
    
    fetchFile()
})