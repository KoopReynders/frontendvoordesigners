// console.log("script");

var section = document.querySelector('section');
var button = document.querySelector('button');
//var requestURL = 'data.html';
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/PE/data.html';

//button actie; onclick load file en onload render naar section
button.addEventListener('click',function(){
  section.textContent = "load data";
  // console.log('click');
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();
  request.onload = function() {
    var data = request.response;
    console.log('request.responseType',request.responseType)
    console.log("request.response", data);

    section.innerHTML = data;
  } //end request.onload

}) //end button clicks
