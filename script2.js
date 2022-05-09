document.addEventListener("DOMContentLoaded", function () {
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

  const suggBox = searchWrapper.querySelector(".results");

  //     console.log(searchInput.value)
  // faire le json

  //?append
  //?createElement
  //?innerText

  //json decode pour rcup mes données de input php
  
  fetch("pierres.json", {
      method: "POST",
    })
    .then((raw) => raw.json())
    .then((raw) => {
        console.log(raw);
        const rawData = raw[2]["data"];
          console.log(rawData);
        
        function getData() {
            var tab = [];
            rawData.forEach((rawData) => {
                var pierreName = rawData.name;
                tab.push(pierreName)
            });
            //return les valeurs du foreach en tableau
            return tab;
        };
        
        const pierreNames = getData();
        // console.log((pierreNames));
        const pierreNamesTab =  Object.entries(pierreNames); // or Object.values
        console.log(pierreNamesTab);
        
        inputBox.onkeyup = (event) => {
        let userData = event.target.value;
        console.log(userData);
        let emptyArray = [];
        // var match = userData.match(pierreNamesTab);

        // console.log(match);

        if (userData) {
         emptyArray = pierreNamesTab.filter((userData)=>{
            //  console.log(data);
            return userData.toLowerCase();
        });
        emptyArray = emptyArray.map((userData)=>{
            return userData = '<li>'+ userData +'</li>';
        })
       
        }
      };

    //    console.log(extract());
      // console.log(raw[2]['data'][0].name);
      // return data.pierres

      // qq

      
    });

    const printAddress = async () => {
    const a = await pierres;
    console.log(a);
  };

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
