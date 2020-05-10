//1. add items from form to localstorage array
//2. add items from local storage array to page 

let songs = ['song 1', 'song 2', 'song 3', 'song 4'];
localStorage.setItem('songs', JSON.stringify(songs));
// Get songs array from the local storage, and parse the JSON data
let song = JSON.parse(localStorage.getItem('songs'));

let list = $('<ul></ul>'); 
for (let allSongs of song){
    let taskItem = $('<li></li>'); 
    taskItem.text(allSongs); 
    list.append(taskItem); 
}
$('#tasks').append(list); 



let x = 0;
let array = Array();
let e;  

function display_task(){
    array[x] = document.getElementById("task").value;
    x++;
    document.getElementById("task").value = "";
    e = "<hr/>";   
    
   for (var i=0; i<array.length; i++){
        e += array[i] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}


let taskArray = []; 
localStorage.setItem('taskArray', JSON.stringify(e)); 
let newArray = JSON.parse(localStorage.getItem('taskArray')); 
