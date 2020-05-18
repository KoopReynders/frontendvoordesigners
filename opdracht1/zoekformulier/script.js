
//declaratie van dom elementen
var zoekveld = document.querySelector('body>header');
var zoekbutton = document.querySelector('body>header>button');
var closebutton = document.querySelector('body>header>form>button');
console.log(zoekbutton)

//actie !
zoekbutton.addEventListener("click",showhidesearch);
closebutton.addEventListener("click",showhidesearch);

function showhidesearch(){
  zoekveld.classList.toggle('show-search');
  zoekbutton.classList.toggle('hide');
  event.preventDefault();
}



/*





EventListeners
  click
  mouseover
  mousedown
  mouseup
  ...
  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
*/

/*
Classlist
  classList.add( String )
  classList.remove( String )
  classList.toggle ( String )
  ...
  https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/





/*
function showClose(){
   zoekicon.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFJSURBVFhH7ZZLSsRAFEWjgkNx4Ap0A6Ib8DNx5JYcuwRxprgBfxvQ5agTEZ3puTQXilBJvUpXO8qBAyF0v3u7uhKqm5kJsIfri8sqdnBrcTmNNbzCX7zHTYxyjJ/4hge6UYvCr1Hh9gkjJRT+hf7eBx5iFf7lfUsl+uFWJfYxxC72B6QOlRgKt3cYQsv/gLkhtl/iBMfCf/AIw2i4QnLDrEtEws+wGg1/xtxQ+4IrCTeREkMuHW6mlGgWbmpKNA83KvGKudDUc1wJpzi24axWSmWbUnrU+jYtURtuS6/tEKXXa8mlSpTCtdu14UpPx6QSpfBv9KOm4U1L6CSjw0RukEzDjYYrJPd5e4khtvEdc0Ny4aZU4gLD6ASjQ0Q6YCzcDJW4xQ2sIi0RCTcq8YgOv8HqcKNjlNprU9agEvrPteyTw2dm/oGu+wObPRQI0GpeRAAAAABJRU5ErkJggg==";
  zoeklabel.innerHTML = "sluit zoeken";
}
function showSearch(){
   zoekicon.src ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGOSURBVFhH7ZZLSgQxEIZb1FMIbkY34mPtCUbd+96otxAGcePjEL7AK6mn8LVVF/p/0D+EMGLS6Rk3/cPHNNWpSqVTSU3VKVFTYkms1/CMbeSaE7fiVXxHvAjeMaZ1TYhT8SXiiWM+xInApxUR6F6EkzyIc3FQwzO2cMydaCUJVu6gb2JbDAuMbVe8C48fiCLNi09BMAIvir9EQToJfHuisSgqr2YLQ6J2hP2uMDTRtHC1s785+8nYJ4Evp6PREV0RXsUZhkxRmPZnW7LVFw5wiCFTR8L+xMpWmwmsYchV6RZcCPsTK1sUIQVEgEdRUoSTopFuhFfB0UrVvrDfNYamorGEF1FKNfO5w4uIy6xINBavhsB7Yth2YGPlnhyORbEITGNxUKAmLoWbEc/YwjFAIW6KBVEkkqCx0GrjSWL47KycpGzjq6yKYlETFNWzCCcFqp1733vOVoXvW0sCcbfTGblgNsSyiI9a2BVHkkSKmKxLAnVJWL8lMSvGpjgJ/vSOXU7iXya3ZurfToGq6gecSbLOkBfjigAAAABJRU5ErkJggg==";
    zoeklabel.innerHTML = "zoek een verhaal";
}
*/
