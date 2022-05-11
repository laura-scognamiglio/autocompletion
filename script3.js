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


        if (searchInputValue.length > 0) {

        
            fetch('element.php',{
                method: 'POST',
                body: datas
            })
            .then((raw => raw.json())
            
            )
            
            .then((raw => {
                
                
                console.log(raw);
            

               
                
               
            }));
        };
        

    });

});