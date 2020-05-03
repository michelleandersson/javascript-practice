/*Create an HTML page that displays an ordered 
list of tracks to the webpage using Document Object
 Model API.*/
 let playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];



function nextTrack(){
    let list = document.getElementById("listMusic"); 
    let li; 
    

    for (let i = 0; i<playList.length; i++){
        li = document.createElement("li"); 
        li.appendChild(document.createTextNode(`Author: ${playList[i].author} `));
        li.appendChild(document.createTextNode(`Song: ${playList[i].song} `)); 
        list.appendChild(li); 
    }
    
}; 
     

