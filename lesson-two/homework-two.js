/*1. Write a calculator. Request 2 numbers and an operation as a symbol (+ - * /). The program solves it depending on the operation and 
shows the result.*/

/*let num1 = parseInt(prompt("Please provide your first number."), 10); 
let num2 = parseInt(prompt("Please provide your second number"),10);
let operand = prompt("What would you like to do with your numbers? +, -, /, or *?"); 

switch (operand) {
    case "+": 
    alert(num1 + num2); 
    break; 
    case "-": 
    alert(num1 - num2); 
    break;
    case "/": 
    alert(num1 / num2); 
    break;
    case "*": 
    alert(num1 * num2); 
    break;
}*/

/*2. Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24, or 6! is 1 * 2 * 3 * 4 * 5 * 6 = 720.*/

/*let factorial = prompt("Please provide a number"); 
let total = 1;
for (let i = 1; i <=factorial; i++) {
  total = total * i;
}
console.log(factorial + '! = ' + total);*/


/*3. Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: "1 sheep...2 sheep...3 sheep..." to the 
page as a paragraph. If a user types a negative number in, alert an error.*/

/*let sheep = prompt("Please provide a number of sheep");

for (i= 1; i<= sheep; i++) {
    document.write(`<p> ${i} sheep...</p>`);    
}

if (sheep <= 0) {
    alert("Now you\'re counting imaginary sheep! Please provide a positive number!"); 
    } else {
  
    }*/


/*4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. Show the prompt as many times until the user 
answers correctly.*/

/*let answer; 
do {
    answer = prompt("Solve for 2+2*2");
} while (answer != 8); 

console.log("You did it!");*/