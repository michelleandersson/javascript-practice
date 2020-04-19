/*1. Create a “groceries list” array. Each element of 
the array is an object that contains the name of a 
product, an amount needed and a property saying 
whether it is bought or not. Write a few functions
for working with this array: 
1) Function for displaying the entire list; 
2) Function for adding a purchase to the list. 
Note that if a product already exists in the array,
the amount needs to be increased in the existing 
purchase, not in a new one; 
3) Function for purchasing a product. The function 
accepts the name of a product and marks it as bought.*/


let shoppingList = [
    {
        name: 'apples', 
        amount: 2, 
        isBought: false
    },
    {
        name: 'eggs', 
        amount: 6, 
        isBought: true
    },
    {
        name: 'potatoes', 
        amount: 4, 
        isBought: false
    }
]; 

/* UNSURE HOW TO MAKE IT ADD IF THE PRODUCT ALREADY EXISTS IN THE LIST
function displayList() {
    console.log(shoppingList); 
}; 
displayList(); 
*/

/*
let newName = prompt("What do you need to purchase?"); 
let newAmount = prompt("How many do you need?");  

shoppingList.push(
    {
        name: newName,
        amount: newAmount,
        isBought: false 
    }
); 

console.log(shoppingList); 
*/

/* NOT SOLVED! 
function listStatus() {
    if (isBought === true) {
        console.log (`You have bought ${shoppingList.amount} of ${shoppingList.name}!`); 
    } else {
        console.log(`You still need to buy ${shoppingList.amount} of ${shoppingList.name}`); 
    };
}; 

listStatus(); 
console.log(listStatus(shoppingList)); 
*/




/*2. Create an array of classrooms. A classroom 
object consists of a name, a number of seats 
(10 to 20) and the faculty it is meant for. 
Write a few functions for working with it: 
1) Display all the classrooms; 
2) Display all the classrooms for a given faculty; 
3) Display only the classrooms that would fit a 
given group. A group object contains a name, 
the number of students, and the faculty name.*/

let classroom = [
    {
        name: 'Sunshine', 
        seats: 15, 
        faculty: 'Mr. Peck'
    },
    {
        name: 'Meadow', 
        seats: 10, 
        faculty: 'Mrs. Wood'  
    }, 
    {
        name: 'Mountain', 
        seats: 20, 
        faculty: 'Miss Day'
    },
    {
        name: 'MoonLight', 
        seats: 12, 
        faculty: 'Miss Day'
    }
]; 

/*
function displayList() {
    console.log(classroom); 
}; 
displayList(); 
*/

/*NOT SOLVED!
let newClassroom = classroom.filter(function(faculty){
    if (classroom.faculty = 'Mr. Peck'){
        console.log(`Miss day has the classrooms ${classroom.name}`);
    }
}); 
 
console.log(newClassroom); 
*/

/*NOT SOLVED
*/