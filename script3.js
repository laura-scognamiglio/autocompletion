'use strict';

document.addEventListener("DOMContentLoaded", (event) => {


    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".results");
   
    var p = document.createElement('p');
    // var main = document.querySelector('body');

    inputBox.addEventListener("keyup", (e) => {

        var searchInputValue = inputBox.value
        // console.log(searchInputValue);
        var datas = new FormData();
        datas.append('search', searchInputValue);

            fetch('traitement.php',{
                method: 'POST',
                body: datas
            })

            .then(raw => raw.json())  
            .then(raw => {
                
                // console.log(raw);
                let emptyLi = "";

                var items = raw.crystalsAll;

                if(searchInputValue != null) {
                    for(let i = 1; i < items.length; i++){
                        
                        var item = raw.crystalsAll[i];

                        // console.log(typeof(item));

                        emptyLi = emptyLi + "<li>"+item.name+"</li>";

                        
                        suggBox.innerHTML = emptyLi;
                    }
                }
                // else{

                // }
                    
                    for(let j = 0; j <  raw.crystalsStart.length; j++) {
                        
                        var itemSolo = raw.crystalsStart[j];
                        console.log(itemSolo);
                    }
                    
               
                //mettre ds php si resultats vide 
               
            });
        
        

    });

});