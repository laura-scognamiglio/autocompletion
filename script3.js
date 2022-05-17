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
                //mattre la value en lowercase et avc trim
                var items = raw.crystalsAll;
                var itemStart = raw.crystalsStart;

                if(searchInputValue == "") {

                    suggBox.innerHTML = emptyLi;

                }else{

                    for(let j = 0; j <  raw.crystalsStart.length; j++) {
                        
                        var itemSolo = raw.crystalsStart[j];
                        var itemSoloId = itemSolo.id 

                        // icon.onclick = ()=>{
                        //     webLink = `http://localhost:8888/autocompletion/index.html/search?q=${selectData}`;
                        //     linkTag.setAttribute("href", webLink);
                        //     linkTag.click();
                        // }
                        // <li onclick="location.href='page.html';"  style="cursor:pointer;">...</li>

                        emptyLi = emptyLi + "<li><a href=element.php?id="+itemSoloId+">"+itemSolo.name +"</a></li>";

                        console.log(itemSoloId);

                        for(let i = 0; i < items.length; i++){
                        
                        var item = raw.crystalsAll[i];

                        emptyLi = emptyLi + "<li>"+item.name+"</li>";

                        
                    }
                    }

                    
                    
                    suggBox.innerHTML = emptyLi;
                }
                    
                    
               
                //mettre ds php si resultats vide 
               
            });
        
        

    });

});