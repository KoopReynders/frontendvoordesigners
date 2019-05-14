// console.log("script");

var section = document.querySelector('section');
var button = document.querySelector('button');
var requestURL = 'data.html';
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/PE/data.html';


button.addEventListener('click',function(){
  // console.log('click');
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'document';
  request.send();
  request.onload = function() {
    console.log("request.response",request.response);
  } //end request.onload

}) //end button.addEventListener
