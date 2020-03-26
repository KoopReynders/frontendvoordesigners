//knoppen
var next = document.querySelector("a[rel='next']");
var prev = document.querySelector("a[rel='prev']");

var current = 0; //eerste pagina, index = 0
var pages = [
      "https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/index.html",
      "https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/article2.html",
      "https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/article3.html",
      "https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/article4.html"
    ];

function loadnext(page){
  //request opzetten
  var request = new XMLHttpRequest();
  // console.log("XMLHttpRequest",request);
  request.onload = function() {
    //alleen het article selecteren van de request.response (en niet de hele html met head en body)
    var article = request.response.querySelector("article");
    article.setAttribute("data-current",current);
    // article aan de dom toevoegen
    document.querySelector("main").appendChild(article);
    //als het artikel is geplaatst, animeren:
    shownext();
  }
  request.open('GET', page);
  //set 'type' als 'text', omdat html wordt geladen
  request.responseType = 'document';
  request.send();
}
function shownext(){
  //margin-left van het eerste artikel aanpassen
  document.querySelector("article:first-child").style.setProperty("--margin", current);
  //buttons disablen

}
function setupXHR(){
  //feature detect
  //als de browser XHR niet ondersteunt, stopt de functie
  console.log(window.XMLHttpRequest);
  if (!window.XMLHttpRequest){
    console.log("XHR wordt niet ondersteund")
    //De functie wordt afgebroken
    return false; //dat is prima want de html doet het nog steeds
   }
   next.onclick = function(){
     event.preventDefault();
     console.dir(this);
     //console.log("page",pages[current()+1]);
     current+=1
     loadnext(pages[current]);
   }
   prev.onclick = function(){
     event.preventDefault();
     current-=1
     shownext();
   }
}

setupXHR();

// shownext("https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/article4.html");

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
