//cloon menu voor fancy menu

//menu link
var menulink = document.querySelector("header > a");
//in de header wil ik het menu plaatsen
// var doc = document.querySelector("body");
//menu pakken en clonen
var menu = document.querySelector("#menu");
var menucloon = menu.cloneNode(true);
//het gecloonde menu in de header plaatsen.
document.querySelector("body").appendChild(menucloon);
//id zetten (anders heb je twee dezelfde id's in de dom)
menucloon.id ="menutop";
menucloon.querySelector("h2").textContent = "Fancy menu:";
//class toevoegen voor de css magic
menucloon.classList.add("hamburgesia");

//a link menu actie afpakken
menulink.onclick = function() {
  event.preventDefault();
  menucloon.classList.toggle('showmenu')
};
