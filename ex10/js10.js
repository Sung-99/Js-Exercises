
let objs_Name1 = document.querySelector("#inp-name1");
let objs_Name2 = document.querySelector("#inp-name2");


let aa = document.querySelector("#aa");

//#Source https://bit.ly/2neWfJ2
// Define a function called `matches` that takes two objects as arguments and checks if the first object contains all the key-value pairs of the second object.
const matches = (obj, source) =>
    // Iterate over each key in the source object and check if it exists in the obj object and has the same value.
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  

let compare =  document.querySelector("#compare");

compare.onclick = function (){

    aa.textContent = objs.value;
}  