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
  

  //?append
  //?createElement
  //?innerText

  fetch("pierres.json", {
    method: "POST",
  })
    .then((raw) => raw.json())
    .then((raw) => {

      const rawData = raw[2]["data"];
      
      function getData() {
          var tab = [];
        rawData.forEach((rawData) => {
            pierreName = rawData.name;
            tab.push(pierreName)
        });
            //return les valeurs du foreach en tableau
              return tab;
      };
      
    const pierreNames = getData();
    // console.log((pierreNames));
    const pierreNamesTab =  Object.values(pierreNames); // or Object.entries
    // console.log(pierreNamesTab);
      
      inputBox.onkeyup = (event) => {
        let userData = event.target.value;
        console.log(userData);
        let emptyArray = [];
        // const match = userData.match(pierreNamesTab);

        // console.log(match);
//!comparer dans ma condition utilisé .match()? 
        if (userData) {
         emptyArray = pierreNamesTab.filter((data)=>{
            //  console.log(data);
            return data.toLocaleLowerCase();
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        })
       
        }
      };

    //    console.log(extract());
      // console.log(raw[2]['data'][0].name);
      // return data.pierres

      // searchInput.addEventListener("keyup", () => {

      //     var searchInputValue = searchInput.value

      //     return raw.filter(crystal => crystal.match(searchInputValue))
      //     // console.log(raw.filter(pierre => pierre.match(raw)))
      //     // matchData();
      //     // console.log(matchData())
      // })

      
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
