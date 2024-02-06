
/*Question 5: Write a JavaScript program to rotate the string 'w3resource' 
in the right direction. This is done by periodically removing one letter 
from the string end and attaching it to the front.  

from: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php










// Define a function that animates the characters of a string
/* Solution by other collaborator

function animate_string(id) {
    // Get the HTML element by its id
    var element = document.getElementById(id);

    // Access the text node inside the element (assuming no other children)
    var textNode = element.childNodes[0];
    
    // Extract the initial text content of the text node
    var text = textNode.data;

    // Set up an interval to rotate the characters in the text every 100 milliseconds
    setInterval(function () {
        // Move the last character to the beginning of the string
        text = text[text.length - 1] + text.substring(0, text.length - 1);

        // Update the text content of the text node with the modified string
        textNode.data = text;
    }, 100);


*/

//My solution

  window.onclick = function(event){
    


    let rodarbtn = document.getElementById("btnStart");
    document.getElementById("btnStop").addEventListener("click", stop);

    let getId= document.getElementById("tt");
    let getSstringToReplace = getId.childNodes[0].data;


    let myInterval 
    

    if(event.target == rodarbtn){   
        myInterval = setInterval(run, 100);
    }
    function stop(){
        clearInterval(myInterval);
    }
    function run(){   
        getSstringToReplace= getSstringToReplace[getSstringToReplace.length-1] + getSstringToReplace.substring(0, getSstringToReplace.length - 1);  
        
        getId.childNodes[0].data = getSstringToReplace;
    }
    
}      
    
