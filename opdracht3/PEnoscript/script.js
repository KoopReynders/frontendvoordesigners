//cloon menu voor fancy menu

//menu pakken en clonen
// var menu = document.querySelector("#menu");
var menucloon = document.querySelector("#menu").cloneNode(true);
//het gecloonde menu in de body plaatsen.
document.querySelector("body").appendChild(menucloon);
//id zetten (anders heb je twee dezelfde id's in de dom)
menucloon.id ="menutop";
//titel mag anders omdat dit menu boevnin de pagina wordt getoond
menucloon.querySelector("h2").textContent = "Fancy menu:";
//class toevoegen voor de css magic
menucloon.classList.add("hamburgesia");

//a link menu afpakken en nieuwe actie aanmaken
document.querySelector("header > a").onclick = function() {
  event.preventDefault();
  menucloon.classList.toggle('showmenu')
};
