/*Create an HTML page with traffic lights and a 
button that switches the color to the next one.*/

var redlight = document.getElementById('redlight');
var yellowlight = document.getElementById('yellowlight');
var greenlight = document.getElementById('greenlight');
var colors = ["rgb(255, 0, 0)",'rgb(82, 2, 2)','rgb(255, 255, 0)','rgb(63, 74, 0)','rgb(5, 199, 5)','rgb(4, 74, 0)'];

function start() {
    if  (redlight.style.backgroundColor == colors[0])
    {
        redlight.style.backgroundColor = colors[1]; //switch off red
        yellowlight.style.backgroundColor = colors[2]; //switch on yellow
    }
    else if (yellowlight.style.backgroundColor == colors[2]) {
        yellowlight.style.backgroundColor = colors[3]; //switch off yellow
        greenlight.style.backgroundColor = colors[4]; //switch on green
    }
    else if (greenlight.style.backgroundColor == colors[4]) {
        greenlight.style.backgroundColor = colors[5]; //switch off green
        redlight.style.backgroundColor = colors[0]; //switch on red
    }
}