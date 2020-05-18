var containerElement = document.querySelector("main");
var paneElement = document.querySelector("ol");
var buttonVorige = document.querySelector("button[name*='scrollvorige']");
var buttonVolgende = document.querySelector("button[name*='scrollvolgende']");
//buttonVorige.disabled = true;
//buttonVorige.classList.add('disabled');
//buttonVolgende.disabled = true;
//buttonVolgende.classList.add('disabled');

var breedte = 640; /* breedte per box */
var marges = 0; /* marge links + rechts */
var current = 1;


///wel of geen smooth scroll?
var checkSmoothscroll = document.querySelector("input");
checkSmoothscroll.onchange = function() {
  //console.log(checkSmoothscroll.checked);
  if(checkSmoothscroll.checked){
    containerElement.classList.add("smooth");
  }else{
    containerElement.classList.remove("smooth");
  }
}



//HTML scroll
//var scroller = function(){};
buttonVorige.addEventListener("click",function(){
  containerElement.scrollLeft -= currentPosition() + breedte + marges;
  console.log("Vorige");
});
buttonVolgende.addEventListener("click",function(){
  containerElement.scrollLeft -= currentPosition() - breedte - marges;
    console.log("Volgende");
});

var currentPosition = function(){
  //geeft de huidige positie van de carousel
  //wordt gebruikt in de button click acties voor volgende/vorige
  return paneElement.offsetLeft;
}

function backtostart(){
  //set slider naar current = 1
  slider(1); //init current slide = 1
  //set scroller weer naar begin positie
  containerElement.scrollLeft = 0;
}
backtostart();
//selectAnimate.onclick();
