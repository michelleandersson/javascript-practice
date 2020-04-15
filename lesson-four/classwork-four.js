/* 1. Write a program that lists the properties
 of an object.*/

 /*
 let student = {
     name: "Jane Rayy", 
     class: "VI",
     age: 12
 }; 
for (let key in student) {
    console.log(`${key} = ${student[key]}`);  
} 
*/



/* 2. Create an object that holds information 
of your favorite recipe. It should have properties 
for title (a string), servings (a number), and 
ingredients (a string, each ingredient separated by 
a comma). Display the recipe information on the
webpage. Use heading for the title. Use
paragraphs for other info.*/

/*
let recepit = {
    title: "Mole",
    servings: 2, 
    ingredients: "Cumin, Cocoa, Cinnamon"
}; 
document.write(`<h1>Title: ${recepit.title}</h1>`);
document.write(`<p>Servings: ${recepit.servings}</p>`);
document.write(`<p>Ingredients: ${recepit.ingredients}</p>`);
*/ 

/*3. Write a function to get a copy of the object
 where the keys have become the values and the 
 values become the keys.*/

 /*
 function invertObject(object) {
     let result = {} ; 
     for (const key in object) {
         result[object[key]] = key; 
     }
     return result; 
 }; 
 
 let person = {
     name: "Alex", 
     lastname: "Doe", 
     age: 25
 }; 

 console.log(invertObject(person)); 
 */

/*Suppose we have this array:
 people = ["Alex", "Mary", "Devon", "James"]; 
 Do the following manipulations with the array: 
 1) Remove “James” from the array; 
 2) Remove “Alex” from the array; 
 3) Add your name to the beginning of the array; 
 4) Add “Jane” to the end of the array; 
 5) Using for-loop, write all names of the changed 
 array to the webpage using document.write() .*/

/* 
let people = ["Alex", "Mary", "Devon", "James"]; 

people.pop(); 
console.log(people); 

people.shift(); 
console.log(people); 

people.unshift("Michelle"); 
console.log(people); 

people.push("Jane"); 
console.log(people); 

for (let newList of people){
    document.write(`${newList}, `); 
}
*/




/*Write a function that accepts an array and returns 
a reversed version of it. Do not use the reverse() 
function. For example: ['a', 'b', 3, 'c', [], 10] 
will be [10, [], 'c', 3, 'b', 'a'] .*/

/*
let list = ['a', 'b', 3, 'c', 10]; 
console.log(list); 

function reverseArray(arr) {
    let newArray = []; 
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]); 
    } 
    return newArray; 
}

console.log(reverseArray(list)); 
*/


/*Write a script that displays the reading status of
 the following books (either to the webpage or to
 the console).*/

/*
let myLibrary = [ 
{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    isRead: true
},
{
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    isRead: true
},
{
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    isRead: false
}];

for (let i = 0; i< myLibrary.length; i++) {
    let book = "'" + myLibrary[i].title + "' " + 'by ' + myLibrary[i].author + "."; 
    if (myLibrary[i].isRead) {
        console.log("I already read " + book);
    } else {
        console.log("I still need to read " + book);
    }
}; 
*/