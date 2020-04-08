/*1. Write a function which accepts an argument and returns the type of the 
argument.*/

/*
let name = prompt("What is your name?"); 

function greet(name) {
    alert(`Hello ${name}!`); 
}

greet(name); 
*/



/*2. Write a function that accept two integers and returns the larger one.*/

/*
function numbers(x, y) {
    if (x>y) {
    console.log(`${x} is larger!`);
    } else if (x<y) {
        console.log(`${y} is larger!`);
    } else {
        console.log("They are the same!")
    }
}

numbers(8, 8); 
*/

/*3. Write a function that show how old a dog in human years, it should take 
one argument - puppy’s age. 1 human year is 7 dog years. The function should 
return a string like “Your doggie is NN years old in dog years!”*/

/*
let age = prompt("How old is your puppy?"); 

function puppyAge(age) {
     let humanYears = age * 7;
    console.log(`Your puppy is ${humanYears} old!`);  
}

puppyAge(age); 
*/


/*4. Write a function that accepts a string as a parameter and counts the number 
of vowels within the string.*/ 

/* NOT SOLVED! 
function message(){
    let message = prompt("Write a message");
    let vowels = 0;

    for (let i = 0; i < message.length; i++) {
    if (message[i] == 'a') {
        vowels += 1;
    } else if (message[i] == 'e') {
        vowels += 1;
    } else if (message[i] == 'i') {
        vowels += 1;
    } else if (message[i] == 'o') {
        vowels += 1;
    } else if (message[i] === 'u') {
        vowels += 1;
    }
    }
    console.log(`There are ${vowels} vowels in your message`); 
}
message(); 
*/


/*Each function has to return a value, do not display a result inside a 
function.*/

/*1. Write a function that accepts a string as a parameter and counts the number 
of vowels within the string.*/

/* NOT SOLVED!
function countingVowels(string){
    let message = 'Hello World';
    let vowels = 0;

    for (let i = 0; i < message.length; i++) {
    if (message[i] == 'a') {
        vowels += 1;
    } else if (message[i] == 'e') {
        vowels += 1;
    } else if (message[i] == 'i') {
        vowels += 1;
    } else if (message[i] == 'o') {
        vowels += 1;
    } else if (message[i] === 'u') {
        vowels += 1;
    }
    }
    return i; 
}

countingVowels(); 
console.log(`There are ${vowels} vowels in your message`); 
*/



/*2. Write a function that accepts hours, minutes, and seconds and returns
 that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 
 5145 seconds.*/

/*
function time(h,m,s) {
    let result = (h*3600) + (m*60) + s; 
    return result;  
}

let calculatedTime = time(2, 25, 43); 
console.log(`The time is ${calculatedTime} seconds`); 
*/
 


/*3. Write a function that accepts two arguments: a string and a character. 
The function has to count the number of occurrences of the specified character 
within the string. For example, there are 2 occurrences of a character “o” in the 
string “Hello world”.*/

/* NOT SOLVED! 
function occurences(x, y) {
    let times = 0; 
    for (let i = 0; i<y; i++) {
        x[i]== y; 
        times +=1; 
    }
    return times; 
}

let message = ocurences(string('hello'),string('o')); 
console.log(`${message}`); 
*/ 