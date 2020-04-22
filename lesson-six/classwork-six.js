/*1. Create a PrintMaсhine class that consists of 
font size, font color, font-family, and print() 
method that accepts text and prints it to the 
webpage using document.write(). The text should be 
displayed using the font properties of the class. 
Create an instance of that class and call the 
print() method.*/


class PrintMachine {
    constructor(fontSize, fontColor, fontFamily, message){
        this.fontSize = fontSize; 
        this.fontColor = fontColor; 
        this.fontFamily = fontFamily; 
        this.message = message; 
    }
    printMessage() {
        document.write(`<p style="font-size:${this.fontSize}px; font-family: ${this.fontFamily}; color:${this.fontColor};">Here is your message: ${this.message}</p>`); 
    }
}

 

let firstPrint = new PrintMachine(25, 'red', 'arial', 'Hello World'); 
//console.log(firstPrint.printMessage()); 



/*2. Create a Shape class that consists of name, 
number of sides, and side length. Add getter that 
returns the shape perimeter. Create a new instance 
of Shape called square. Get the perimeter to check 
whether it works correctly. Create a new instance 
of Shape called triangle, get the perimeter to check 
that it works OK.*/


class Shape {
    constructor(name, sideNumber, sideLength){
        this.name = name; 
        this.sideNumber = sideNumber; 
        this.sideLength = sideLength; 
    }

    get perimeter() {
        return this.sideNumber * this.sideLength; 
    }
    
}; 

let square = new Shape('Square', 4, 5); 
//console.log(square); 
//console.log(square.perimeter); 

let triangle = new Shape('Triangel', 3, 15); 
//console.log(triangle); 
//console.log(triangle.perimeter); 




/*3. Create a Square class that inherits from the 
Shape class you created in the last assignment. 
Add calculateArea() method that calculates the 
square’s area. Also set up the constructor so that
the name property of Square class is automatically 
set to “square”, and the “sides” property is
automatically set to 4. When invoking the 
constructor, you should therefore just need to 
provide the side length property.*/


class Square extends Shape {
    constructor(sideLength){
        super('Square', 4, sideLength);  
    }
    calculateArea(){
        return this.sideLength *  this.sideLength; 
    }
}; 

let firstSquare = new Square(10); 
//console.log(firstSquare); 
//console.log(firstSquare.calculateArea()); 



/*4. Create an Animal class. Animal has a name and 
can eat. The eat() method should display a string
 “The animal called NAME is eating”. Create a Bird 
 class that inherits from the Animal class. Bird 
 accepts a number of wings and has a method fly() 
 that just displays some message. Create an instance 
 of Bird classand call eat() and fly() methods of it.*/


 class Animal {
     constructor(name, food){
         this.name = name; 
         this.food = food; 
     }; 
     eat(){
         console.log(`The animal called ${this.name} is eating ${this.food}`); 
     }; 
 }; 

 let cat = new Animal ('cat', 'mice'); 
 //console.log(cat.eat()); 

class Bird extends Animal {
    constructor(name, food, wings){
        super(name, food); 
        this.wings = wings; 
    }

    eat(){
        super.eat(); 
    }

    fly(){
        console.log(`The animal called ${this.name} flies with its ${this.wings} wings!`); 
    }
}; 

 let dove = new Bird('Dove', 'mice', 2); 

 //console.log(dove.eat()); 
 //console.log(dove.fly()); 

/*5. Create a class that describes an article 
(heading, short description, tags array, date of 
publication in format YYYY-MM-DD). Create a 
method of the class that will print all the 
article information to the webpage using
document.write(). If the date of publication 
was less than a day ago, it is displayed as
“today”, if less than a week ago - “N days ago”,
and otherwise it is shown as the full date format 
dd:mm:yyyy.*/

class Article {
    constructor(heading, description, tags, date){
        this.heading = heading; 
        this.description = description; 
        this.tags = tags; 
        this.date = date;        
    }

    printArticle(){
        document.write(`<h1>${this.heading}</h1>`);
        document.write(`<h2>${this.description}</h2>`);
        document.write(`<h4>${this.tags}</h4>`);
        document.write(`<h4>Published: ${this.date}`);    
    }
}; 

let firstArticle = new Article ('My Article', "A short article written by me.",
['article', 'me', 'first'], 2020-04-18); 

console.log(firstArticle.printArticle()); 
 