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
    printMessage(text){
        let newText = ''; 
        for (let character of text) {
            if (this.inkAmount ===0) break; 
            
            newText += character; 
            if (character !== ' ') {
                this.inkAmount -=0.5; 
            }
        }
     document.write(`<p style = "color: ${this.color};"> ${newText}</p>`); 
    }   
}; 

let marker = new Marker ('red', 5); 
marker.printMessage('Hello World!'); 



/*Create a class that describes a refillable marker.
 The class should inherit from the regular marker.
 Also add a method that refills the marker. 
 Demonstrate the work of these methods.*/

class RefillMarker extends Marker {
    constructor(color, inkAmount, message, inkRefill){
        super(color, inkAmount, message); 
        this.inkRefill = inkRefill; 
    }
};  

let secondMarker = new RefillMarker ('green', 14); 
secondMarker.printMessage("this is a longer message"); 