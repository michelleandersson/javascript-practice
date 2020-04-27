/*2. Create an HTML page with OPEN button and a 
modal box. The modal box should have text and a 
CLOSE button. The modal box is not displayed from 
the beginning. It appears when clicking the OPEN 
button and disappears when clicking CLOSE.*/


let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}