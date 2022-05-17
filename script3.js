'use strict';

document.addEventListener("DOMContentLoaded", (event) => {

//on cible nos éléments de l'index
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".results");
   
//on crée un event sur l'input pr récuperer la valeur de l'input
    inputBox.addEventListener("keyup", (e) => {

        var searchInputValue = inputBox.value
//on rejette les vides et les majuscules
        var searchInputValue = searchInputValue.trim().toLocaleLowerCase();
        // console.log(searchInputValue);
//on aurai pu accrocher les données en mettant mon form ds les param de formdata
        var datas = new FormData();
        datas.append('search', searchInputValue);

            fetch('traitement.php',{
                method: 'POST',
                body: datas
            })
//données brut en json vienne de jsonencode de php
            .then(raw => raw.json())  
            .then(raw => {
                
           
                let emptyLi = "";
//on récupère les deux tableaux reçu des requetes php et du traitement   
                var items = raw.crystalsAll;
                var itemStart = raw.crystalsStart;

                if(searchInputValue == "") {

                    suggBox.innerHTML = emptyLi;

                }else{
                    
                    if(itemStart !== 0){
                        for(let i = 0; i < items.lenght; i++){
                            var itemSolo = raw.crystalsAll[i];
                            var itemSoloId = itemSolo.id

                            emptyLi = emptyLi + "<li><a href=element.php?id="+itemSoloId+">"+itemSolo.name +"</a></li>";
                        }
                    }
                    for(let j = 0; j <  itemStart.length; j++) {
                        
                        var itemStartSolo = raw.crystalsStart[j];
                        var itemStartSoloId = itemStartSolo.id 


                        emptyLi = emptyLi + "<li><a href=element.php?id="+itemStartSoloId+">"+itemStartSolo.name +"</a></li>";

                    }

                    
                    suggBox.innerHTML = emptyLi;
                }
                    
                    
               
                //mettre ds php si resultats vide 
               
            });
        
        

    });

});