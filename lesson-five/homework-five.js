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


const shoppingList = [
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

/*
function displayList() {
    for (let i = 0; i< shoppingList.length; i++)
    console.log(shoppingList[i].name); 
}; 

displayList(); 
*/

  

/*  THIS IS NOT WORKING CORRECTLY, BUT I DON'T KNOW HOWTO MAKE IT WORK :(

function addItem(item, itemCount, isBought=false){
//if (array.includes(value) === false) array.push(value);
//if name exsists, add amount to itemcount
//else add new item 
for (let i = 0; i<shoppingList.length; i++)
    shoppingList[i].name.includes('raspberry'); 
    if(shoppingList[i].name===true){
    return shoppingList[i].amount = amount+itemCount; 
    } else {
        return shoppingList.push({name:item, amount:itemCount});
    } 
};  

addItem('bananas', 3);
addItem('raspberry',5);  
addItem('raspberry',5); 
displayList(); 
*/
  
/*  
const purchase = name => {
    const idx = shoppingList.findIndex(el => el.name === name);
    return shoppingList[idx].isBought = true; 
}; 
  
purchase('apples');
console.log(shoppingList); 
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

const classroom = [
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
    for (let i = 0; i< classroom.length; i++)
    console.log(classroom[i].name); 
}; 

displayList();
*/

/*
let facultyClassroom = [];
for (let i = 0; i < classroom.length; i++) {
  if (classroom[i].faculty === "Miss Day") {
    facultyClassroom.push(classroom[i].name);
  }
}
console.log(facultyClassroom); 
*/

/*  I DON'T KNOW HOW TO PROCEED WITH THIS LAST ONE
*/