document.addEventListener("DOMContentLoaded", function (){

//     async function fetchFile(){
//         var data = await fetch('pierres.json');
//         //se rajouter un .then() a ce fetch()
        

//         console.log(data)
//         const dataJson = data.json();
//         // console.log(dataJson)

//         return dataJson;
//     }
// fetchFile();
//         console.log(fetchFile());
//     // const pierresJson = 'http://localhost:8888/autocompletion/pierres.json';
//     // const pierres = [];
    
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox

//     console.log(searchInput.value)
    // var resultsWrapper = document.querySelector('.results');
    // var searchWrapper = document.querySelector('.wrapper');

    //?append
    //?createElement
    //?innerText

    
    fetch('pierres.json',{
        method: 'POST'
    })
    .then(raw => {
        return raw.json();
    })
    .then(raw => {
        // console.log(raw);
        // console.log("gfjke");
        // test = prompt("alors?", "...")
        
        // searchInput.addEventListener("keyup", () => {
            
        //     var searchInputValue = searchInput.value
            
        //     return raw.filter(crystal => crystal.match(searchInputValue))
        //     // console.log(raw.filter(pierre => pierre.match(raw)))
        //     // matchData();
        //     // console.log(matchData())
        // })
    });

  

    //les trois petits points sont pour ajouter les données a la fin du tableau 
    // .then(data => pierres.push(...data))

//    function matchData(){
   
//     return pierres.filter(pierre => {
//         const wordToMatch = searchInput.value;
       
//     });

   
    

//    function displayMatches() {
//     const matchArray = matchData(this.value, pierres);
//     const html = matchArray.map(pierres => {
//       const pierreName = pierres.name.replace( `<span class="hl">${this.value}</span>`);
//       const pierreTag = pierres.tag1.replace( `<span class="hl">${this.value}</span>`);
//       return `
//         <li>
//           <span class="name">${pierreName}, ${pierreTag}</span>
//         </li>
//       `;
//     }).join('');
//     resultsWrapper.innerHTML = html;
//   }
  

//    matchData(searchInput)
// console.log(fetch('pierres.json'))
  
// searchInput.addEventListener("change", displayMatches);
// var bla = searchInput.addEventListener("keyup", displayMatches);
    // searchInput.addEventListener('keyup', () => {

    //     var input = searchInput.value;
        // console.log(bla)
    //     // var dataParsed = JSON.parse(dataJson);
    //     // console.log(dataParsed);
     

    //     // if(input.length){
           
    //     // }

    //     
    // })
    
});