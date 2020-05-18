var items = document.querySelectorAll("div");

for (var card of items) {
  card.addEventListener("click",function(){
    this.classList.add('hide');
  });
}



///////
// var nav = document.querySelectorAll("nav");
// nav.addEventListener("change", function(){
//   console.log("change");
// });

//Functie
//reset alle items
document.querySelector("button").addEventListener("click",function(){
  for (var card of items) {
    card.classList.remove('hide')
  }
});
