//INit en declaraties
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

/*
setupXHR
feature detect of de browser XHR ondersteunt.
Zo ja, dan worden de click events van prev/next overschreven.
Zo nee, dan wordt de functie afgebroeken en doet de pagina het met gewonen html.
*/
function setupXHR(){
  //feature detect
  //als de browser XHR niet ondersteunt stopt de functie
  if (!window.XMLHttpRequest){
    console.log("XHR wordt niet ondersteund")
    //De functie wordt afgebroken
    return false; //dat is prima want de html doet het nog steeds
   }
   //Als de feature bestaat, dan worden de click events overschreven.
   next.onclick = function(){
     event.preventDefault();
     current+=1;
     if(document.querySelector("article[data-nr='"+current+"']")){
       shownext();
     }else{
       loadnext();
     }
   }
   prev.onclick = function(){
     event.preventDefault();
     current-=1
     shownext();
   }
}
/*
loadnext
Met AJAX de volgende pagina laden en aan de DOM toevoegen.
*/
function loadnext(){
  //request opzetten
  var request = new XMLHttpRequest();
  // console.log("XMLHttpRequest",request);
  request.onload = function() {
    //alleen het article selecteren van de request.response (en niet de hele html met head en body)
    var article = request.response.querySelector("article");
    article.setAttribute("data-nr",current);
    // article aan de dom toevoegen
    document.querySelector("main").appendChild(article);
    //als het artikel is geplaatst, animeren:
    shownext();
  }
  request.open('GET', pages[current]);
  //set 'type' als 'document', omdat html wordt geladen
  request.responseType = 'document';
  request.send();
}
/*
shownext
Het niewe artikel met een fancy animatie tonen.
*/
function shownext(){
  //margin-left van het eerste artikel aanpassen
  document.querySelector("article:first-child").style.setProperty("--margin", current);
  //buttons aan/uit zetten
  if(current==pages.length-1){
    //current = pages.length-1;
    next.classList.add('disabled');
  }else{
    next.classList.remove('disabled');
  }
  if(current>0){
    //current = pages.length-1;
    prev.classList.remove('disabled');
  }else{
    prev.classList.add('disabled');
  }
}

//Setup functie aanroepen en checken of XHR wordt ondersteund.
setupXHR();
