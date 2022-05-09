document.addEventListener("DOMContentLoaded", function () {


    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".results");


    inputBox.addEventListener("keyup", () => {

        var searchInputValue = inputBox.value
        // console.log(searchInputValue);
        //! call le fichier php et instancier sa classe et call sa fonction
        if (searchInputValue.length > 0) {
            
            fetch("models/SearchBar.php",{
                method: 'POST',
                
            })
            .then((raw) => raw)
            .then((raw) => {
                console.log(searchInputValue);
                console.log(raw);
                
               
            })
        }
        

    })

});