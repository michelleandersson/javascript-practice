/*1. Create an HTML page that will contain text and
 a button. Clicking the button should hide the text. 
 Clicking it again should display the text.*/

const text = document.querySelector('#text'); 

function hideText(){
    if (text.style.visibility === 'hidden'){
        text.style.visibility = 'visible'; 
    } else {
        text.style.visibility = 'hidden'; 
    }
}; 



/*2. Create an HTML page with a progress bar and a 
button. Clicking the button should fill the progress
 bar by 5%. To create a progress bar you can use 
 <progress> tag */
 /*
 let width = 20; 

 function increaseProgress(){
    let progressBar = document.querySelector('#progressBar');
    if (width < 100) {
        width += 5; 
        progressBar.style.width = width + '%'; 
        progressBar.innerHTML = width * 1 + '%'; 
    }
 }*/

 var width = 5;

function move() {
  var elem = document.getElementById("myBar");
    if (width < 100) {
      width+=5;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  
}; 



/*3. Create an HTML page with a Like button. 
Clicking it should increase the number in the likes 
counter.*/

let likes = 0; 
function like(){
    likes +=1; 
    document.querySelector('#likes').innerHTML = likes; 
}