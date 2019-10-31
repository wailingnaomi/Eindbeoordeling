// Code is van:
// • https://codepen.io/shooft/pen/rEvdvP

var deButton = document.querySelector(".hamburger");

deButton.addEventListener("click", fallDown);

function fallDown(){
  var hetMenu = document.querySelector(".dropdown");

  hetMenu.classList.toggle("downGefallen");

}
