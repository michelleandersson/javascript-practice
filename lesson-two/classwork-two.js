/*1. Request a user’s age and define whether he/she is an infant (0–2), a child (3-11), a teen (12–18), an adult (19-60) 
or a senior citizen (60– ...). Display the result in the console.*/

/*let age = prompt("What is your age?");

if(age <=2){
    console.log ("You are an infant."); 
    }else if (age >2 && age <= 11) {
        console.log ("You are a child."); 
    }else if (age >11 && age <= 18) {
        console.log ("You are a teen."); 
    }else if (age >18 && age <= 60) {
        console.log ("You are an adult."); 
    }else if (age >60) {
        console.log ("You are a senior citizen."); 
    }*/


/*2. Request a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button (for example, 1–!, 2–@, 3–# etc). 
Display a result in the console.*/

/*let num = prompt("Please provide a number between 0 and 9."); 

if (num ==0) {
    console.log ("="); 
    }else if (num == 1) {
        console.log ("!"); 
    }else if (num == 2) {
        console.log ("@"); 
    }else if (num == 3) {
        console.log ("#"); 
    }else if (num == 4) {
        console.log ("¤"); 
    }else if (num == 5) {
        console.log ("%"); 
    }else if (num == 6) {
        console.log ("&"); 
    }else if (num == 7) {
        console.log ("/"); 
    }else if (num == 8) {
        console.log ("("); 
    }else if (num == 9) {
        console.log (")"); 
    }*/


/*3. Ask a user 3 questions, each with 3 answer options. Write these options also in the prompt window, after a question. 
The user gets 2 points for each correct answer. Show the earned points after the test.*/
 
/*let first = prompt("What is 2+2? a:1, b:4, c:6"); 
let second = prompt("What is blue+yellow? d:red, e:purple, f:green"); 
let third = prompt("What is 1+1? g:2, h:5, i:6"); 
let points = 0; 

if (first == "b") {
    points = points + 2; 
}
if (second == "f") {
    points = points + 2; 
}
if (third == "g") {
    points = points + 2; 
}

console.log (`Your Score is: ${points}`); */



//4. Request a number from a user, and define whether it is positive, negative, or zero. Display a resulting message as an alert.

/*let number = prompt("Please provide a number");

if (number > 0) {
    alert ("Your number is positive");
    } else if (number == 0) {
        alert ("Your number is zero");
    } else if (number < 0) {
        alert ("Your number is negative");
    }*/


/*5. Request a user’s age and check whether it is realistic (0-120 y.o.). If it is realistic, display a message ‘Hi! You are # years old’, 
otherwise – ‘Hm… Is it even possible?’.*/

/*let age = prompt("What is your age?"); 

if (age >0 && age <120) {
    alert (`You are ${age} years old.`)
    }else {
        alert ("Hm...Is it even possible?");
    }*/


/*One task to do using switch:
Request a number of a month from a user. Print the name of the month to the webpage as a paragraph using document.write().*/

/*let month = prompt("Please provide the number of a month.");

switch(month) {
    case '1': 
    document.write("<p>January</p>"); 
    break; 
    case '2': 
    document.write("<p>February</p>"); 
    break; 
    case '3': 
    document.write("<p>March</p>"); 
    break; 
    case '4': 
    document.write("<p>April</p>"); 
    break; 
    case '5': 
    document.write("<p>May</p>"); 
    break; 
    case '6': 
    document.write("<p>June</p>"); 
    break; 
    case '7': 
    document.write("<p>July</p>"); 
    break; 
    case '8': 
    document.write("<p>August</p>"); 
    break; 
    case '9': 
    document.write("<p>September</p>"); 
    break; 
    case '10': 
    document.write("<p>October</p>"); 
    break; 
    case '11': 
    document.write("<p>November</p>"); 
    break; 
    case '12': 
    document.write("<p>December</p>"); 
    break; 
}*/

/*One task using while loop: 
Request a number and an extent. Raise the number to the given power and display the result. Do not use ** or Math.pow() here.*/

/*let number = prompt("Please provide a number");
let extent = prompt("Please provide an extent");
let sum = number**extent; 

while (sum >0) {
    number++; 
}
console.log(sum); */

/*One task using do while loop: 
Suggest a user solve 2 + 2 * 2 until he/she does it right.*/

let answer; 
do {
    answer = prompt("Solve for 2+2*2");
} while (answer != 8); 

console.log("You did it!");


/*And one task using for loop:
Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: “1 sheep...2 sheep...3 sheep...” 
to the page using document.write(). If a user types a negative number in, alert an error.*/

/*let sheep = prompt("Please provide a number of sheep");

for (i= 0; i<= sheep; i++) {
    document.write(`<p> ${i} sheep...</p>`); 
}*/