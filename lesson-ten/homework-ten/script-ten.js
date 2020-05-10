//1. add items from form to localstorage array
//2. add items from local storage array to page 


let taskArray = localStorage.getItem("taskArray");
taskArray = (taskArray) ? JSON.parse(taskArray) : [];


function clearF() {
    window.localStorage.clear();
    location.reload();
}
function addTask() {
    var x = document.getElementById("taskInput").value;
    taskArray.push(x);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    let taskList = JSON.parse(localStorage.getItem("taskArray")); 

    //THIS PRINTING IS NOT WORKING HOW I WANT IT TO :( 
    document.getElementById("result").innerHTML=(`<ul><li>${taskList}</li></ul>`); 
}





 

    
