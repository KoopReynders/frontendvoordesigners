var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";
//var uri = "../json/movies.json";

var section = document.querySelector('section');
console.log("section",section);


console.log("loadimagesmetXHR");
var request = new XMLHttpRequest();
request.open('get', uri);
request.responseType = 'json';
request.send();

request.addEventListener("load", function(){
  // var data = request.response;
    //er is data
  console.log("request is geladen: ",request.response);

  //nu kun je iets doen
  renderHTML(request.response);

});

function renderHTML(data){
  console.log("renderHTML")
  //section.textContent = JSON.stringify(data);

  for (var i = 0; i < data.length; i++) {
    var article = document.createElement('article');

    var title = document.createElement('h2');
    title.textContent = data[i].title;

    var plot = document.createElement('p');
    plot.textContent = data[i].simple_plot;

    var cover = document.createElement('img');
    cover.src = data[i].cover;

    var video = document.createElement('video');
    video.src = data[i].trailer;
    video.controls = "true";
    video.width = "360";
    video.poster = data[i].cover;

    article.appendChild(title);
    article.appendChild(plot);
    //article.appendChild(cover);
    article.appendChild(video);

    section.appendChild(article);
  };


}
