/*1. Suppose we have an array of people.
let people = ["Mary", "Greg", "Jane", "James"];
Using the splice() function, remove “Jane” from 
the array and add “Elizabeth” and “Artie”.  
Then the array should look like this 
[“Mary”, “Greg”, “Elizabeth”, “Artie”, “James”].*/

/*
let people = ["Mary", "Greg", "Jane", "James"];

people.splice(people.indexOf("Jane"),1,"Elizabeth", "Artie");
console.log(people); 
*/


/*2. Suppose we have an array of objects.
books = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
  }
];
Using forEach() function, print each element to 
the webpage in the following way:
1. Book ‘The Road Ahead’ is written by ‘Bill Gates’
2. Book ‘Walter Isaacson’ is written by ‘Steve Jobs’*/

/*
let books = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
    }
  ];

  books.forEach(function(book){
      console.log(`Book '${book.title}' is written by '${book.author}'`); 
  }); 
  */


/*3. Suppose we have an array of numbers.
let numbers = [112, -20, 52, 0, -1, 944];
Using filter() function, create a new array 
consisting only positive numbers.*/

/*
let numbers = [112, -20, 52, 0, -1, 944];

let numbers2 = numbers.filter(function(number){
    return number > 0; 
}); 

console.log(numbers); 
console.log(numbers2); 
*/


/*4. Suppose we have an array of objects.
let keyValueArray = [
  {
    key: 'name',
    value: 'James'
  },
  {
    key: 'age',
    value: 27
  },
  {
    key: 'surname',
    value: 'Doe'
  }
];
Using map() function, create a new array consisting 
reformatted objects
like this:
[
  {
    name: 'James'
  },
  {
    age: 27
  },
  {
    surname: 'Doe'
  }
]*/

/* NOT SOLVED!!!! 
let keyValueArray = [
    {
      key: 'name',
      value: 'James'
    },
    {
      key: 'age',
      value: 27
    },
    {
      key: 'surname',
      value: 'Doe'
    }
  ];

let reformattedArray = keyValueArray.map(function(item) {
    return item;
});
console.log(keyValueArray); 
console.log(reformattedArray);
*/

/*1. Create a constructor function called Video.
 The function should accept arguments of title 
 (a string), uploader (a string, the person who 
 uploaded it), and seconds (a number, the duration),
 and it should save them as properties of the object. 
 Create a method of the Video constructor called 
 watch() which should log a string to the console 
 like “You watched all 1800 seconds of Walking with 
 Dinosaurs!” Create a new object using the Video 
 constructor and call the watch() method of it.*/

 /*
function Video(title, uploader, seconds){
    this.title = title; 
    this.uploader = uploader; 
    this.seconds = seconds; 
    this.watch = function() {
        console.log(`${uploader} watched all ${seconds} of ${title}!`);
    };
};

let firstMovie = new Video ("Titanic", "Me", 1300);
let secondMovie = new Video ("Land Before Time", "Jakob", 5000);
console.log(firstMovie.watch()); 
console.log(secondMovie.watch()); 
*/




/* 
2. Suppose we have a student object:
let student = {
  name: 'Alex',
  lastname: 'Wood'
};
Write a function called displayStudentInfo which 
accepts an object and returns the string “Your full 
name is NAME LASTNAME”. Use object destructuring to
 create “name” and “lastname” variables.*/

  