//let stringg = document.querySelector('input');


let btn = document.querySelector('button');
let p = document.querySelector('.example-text');

let x = p.innerText.toString();
let y = x.split('\n')

btn.onclick = function(){
    console.log(y);
};
