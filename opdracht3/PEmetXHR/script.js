console.log(window.XMLHttpRequest);

function loadpage(page){
  if (!window.XMLHttpRequest){
    console.log("njet")
    return false;
   }

  var request = new window.XMLHttpRequest();
  console.log("XMLHttpRequest",request);
  request.open('GET', page);
  request.responseType = 'text'; //set 'type' als 'text', omdat html wordt geladen
  request.send();
  request.onload = function() {
    console.log('request.responseType',request.responseType);
    console.log("request.response", request.response);

    document.querySelector('main').innerHTML = data; //property 'innerHTML' gebruiken om data als HTML te laten renderen
    // form.elements["submit"].textContent = "Laad file"; //text op de submit button
  } //end request.onload
}

loadpage("article2.html");

// /*
//   variabelen:
// */
// // var dataURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/PE/data.html';
// // var dataURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/PE/data2.html';
// var section = document.querySelector('section'); //section om de html in te laden
// var form = document.querySelector("form"); //formulier met file selectie
//
// /*
//   Loaddata functie
//   Functie om de data te laden en op de pagina te tonen
//   arg: het data file dat geladen meot worden
// */
// function loaddata(dataURL){
//   //feedback;
//   section.textContent = "loading data file"; //loading feedback tonen in section
//   form.elements["submit"].textContent = "loading ..."; //loading feedback op de submit button
//
//   //ajax:
//   var request = new XMLHttpRequest();
//   request.open('GET', dataURL);
//   request.responseType = 'text'; //set 'type' als 'text', omdat html wordt geladen
//   request.send();
//   request.onload = function() {
//     var data = request.response;
//     // console.log('request.responseType',request.responseType);
//     console.log("request.response", data);
//
//     section.innerHTML = data; //property 'innerHTML' gebruiken om data als HTML te laten renderen
//     form.elements["submit"].textContent = "Laad file"; //text op de submit button
//   } //end request.onload
// } //end function loaddata
