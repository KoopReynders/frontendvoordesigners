var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section = document.querySelector('section');
console.log("section",section);


console.log("loadimagesmetXHR");
var request = new XMLHttpRequest();
request.open('get', uri);
request.responseType = 'json';
request.send();

request.addEventListener("load", function(){
  var data = request.response;
  console.log("request is geladen: ",request.response);
  //er is data
  //nu kun je iets doen
  section.textContent = JSON.stringify(data);
});
