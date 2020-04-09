/*1. Write a function which accepts an argument and returns the type of the 
argument.*/

/*
function detectDataType(value) {
    let dTypes = [Function, RegExp, Number, String, Boolean, Object], x, len; 

    if(typeof value === "object" ||  typeof value === "function") {
        for (x = 0, len = dTypes.length; x < len; x++) {
            if (value instanceof dTypes[x]) {
                return dTypes[x]; 
            }
        }
    }
    return typeof value; 
}

console.log(detectDataType(12)); 
console.log(detectDataType('Hello World')); 
console.log(detectDataType(false)); 
*/



/*2. Write a function that accept two integers and returns the larger one.*/

/*
function numbers(x, y) {
    if (x>y) {
        return `${x} is larger`; 
    } else if (x<y) {
        return `${y} is larger`; 
    } else if (x===y) {
        return "Numbers are the same"
    }
}

console.log(numbers(8, 10)); 
*/


/*3. Write a function that show how old a dog in human years, it should take 
one argument - puppy’s age. 1 human year is 7 dog years. The function should 
return a string like “Your doggie is NN years old in dog years!”*/

/*
function puppyAge(age) {
     let humanYears = age * 7;
    return humanYears; 
}
 
console.log(`Your puppy is ${puppyAge(10)} dog years old`);
*/


/*4. Write a function that accepts a string as a parameter and counts the number 
of vowels within the string.*/ 

/* 
function vowelCount(string) {
    let vowelList = 'aeiouAEIOU'; 
    let vowels = 0; 
    
    for (let i = 0; i<string.length; i++) {
        if (vowelList.indexOf(string[i]) !== -1) {
            vowels +=1; 
        }
    }
    return vowels; 
}

console.log(vowelCount("Hello World")); 
*/


/*Each function has to return a value, do not display a result inside a 
function.*/

/*1. Write a function that accepts a string as a parameter and counts the number 
of vowels within the string.*/

 /* 
function vowelCount(string) {
    let vowelList = 'aeiouAEIOU'; 
    let vowels = 0; 
    
    for (let i = 0; i<string.length; i++) {
        if (vowelList.indexOf(string[i]) !== -1) {
            vowels +=1; 
        }
    }
    return vowels; 
}

console.log(vowelCount("Hello World")); 
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

/*
function characterCount(string, letter) {
    let letterCount = 0; 
    for (let i = 0; i < string.length; i++ ) {
        if (string.charAt(i) == letter) {
            letterCount +=1; 
        }
    }
    return letterCount; 
}

console.log(characterCount('Hello everyone out there!', 'e')); 
*/
