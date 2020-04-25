/*Create a class that describes a regular marker.
It should contain the following components: 
1. A field that stores the color of the marker;
2. A field that stores the amount of ink in the
   marker (in percentage);
3. A method for input. The method takes a string and
   displays the text in the given color on the 
   webpage. The text appears as long as the marker 
   has ink. One non-space character takes 0,5% ink 
   from the marker.*/

class Marker {
    constructor(color, inkAmount, message){
        this.color = color; 
        this.inkAmount = inkAmount; 
        this.message = message; 
    }
    printMessage(){
        let ink1 = parseInt(this.inkAmount, 10);
        let inkSpeed = '0.5'
        let ink2 = parseFloat(inkSpeed);  
        let ink = ink1 * ink2; 
     let messagePrintLength = this.message.substr(0,ink); 
     document.write(`<p style = "color: ${this.color};"> ${messagePrintLength}</p>`); 
    }   
}; 

let firstMessage = new Marker ('red', 14, "hello world"); 
//firstMessage.printMessage(); 



/*Create a class that describes a refillable marker.
 The class should inherit from the regular marker.
 Also add a method that refills the marker. 
 Demonstrate the work of these methods.*/

class RefillMarker extends Marker {
    constructor(color, inkAmount, message, inkRefill){
        super(color, inkAmount, message); 
        this.inkRefill = inkRefill; 
    }
    //I struggled to make it work with super PrintMessage, but at least this way it works....
    printMessage(){
        let ink1 = parseInt(this.inkAmount, 10);
        let inkSpeed = '0.5'
        let ink2 = parseFloat(inkSpeed);  
        let ink = ink1 * ink2; 
        let ink3 = parseInt(this.inkRefill, 10); 
        let newInk = ink + ink3; 
     let messagePrintLength = this.message.substr(0,newInk); 
     document.write(`<p style = "color: ${this.color};"> ${messagePrintLength}</p>`); 
    }
};  

let secondMessage = new RefillMarker ('green', 14, "this is a longer message", 12); 
//secondMessage.printMessage(); 