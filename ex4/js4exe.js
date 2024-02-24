
//Exercise 8 from: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php


/*
***8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

*** 
*/


/* Answer code */




let Divouter = document.createElement("div");
Divouter.className = "Outer-Quest";
Divouter.style.width = "100%";
Divouter.style.color = 'white';

let DivAnswer = document.createElement("div");
DivAnswer.className = "Answer";
DivAnswer.style.width = "100%";
DivAnswer.style.color = 'white';


Divouter.appendChild(DivAnswer);


let x = document.querySelector(".Answer");


Divouter.textContent = "aaaaaaaaaa";
