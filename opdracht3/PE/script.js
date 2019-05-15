// console.log("script");

var section = document.querySelector('section');
var button = document.querySelector('button');
var form = document.querySelector("form");
//var requestURL = 'data.html';
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/PE/data.html';
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/PE/data2.html';


//button actie; onclick load file en onload render naar section
// button.addEventListener('click',function(){
//   section.textContent = "load data";
//   // console.log('click');
//   var request = new XMLHttpRequest();
//   request.open('GET', requestURL);
//   request.responseType = 'text';
//   request.send();
//   request.onload = function() {
//     var data = request.response;
//     console.log('request.responseType',request.responseType)
//     console.log("request.response", data);
//
//     section.innerHTML = data;
//   } //end request.onload
//
// }) //end button clicks

function loaddata(dataURL){
  section.textContent = "loading data file";
  var request = new XMLHttpRequest();
  request.open('GET', dataURL);
  request.responseType = 'text';
  request.send();
  request.onload = function() {
    var data = request.response;
    console.log('request.responseType',request.responseType)
    console.log("request.response", data);

    section.innerHTML = data;
  } //end request.onload
}

form.addEventListener("submit", function(event) {
  console.log("form",form);
  var link = form.elements['link'].value;
  console.log("form input value",link);
  loaddata(link);
  event.preventDefault(); //dus niet het formulier echt versturen met de submit button
}, false);
