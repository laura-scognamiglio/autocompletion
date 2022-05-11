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

            fetch('element.php',{
                method: 'POST',
                body: datas
            })

            .then(raw => raw.json())  
            .then(raw => {
                
                // console.log(raw.crystalsAll);
                let emptyLi = "";

                if(inputBox != null) {

                    for(let i = 0; i < raw.crystalsAll.length; i++){
                        
                        var item = raw.crystalsAll[i];

                        console.log(typeof(item));

                        emptyLi = emptyLi + "<li>"+item.name+"</li>";

                        
                        suggBox.innerHTML = emptyLi;
                        console.log(item.name);
                    }
                    // const data = Object.entries()
                }else{
                    suggBox.reset();
                }
               
                
               
            });
        
        

    });

});