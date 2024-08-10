
let Para = document.querySelector('p');

let n = 0;
    let inx = [];
let btn = document.querySelector('button').addEventListener("click", function (){
    
    //find all /n ending and holding up their index
    for(X in Para.textContent){
        Para.textContent[X] == '\n' ? inx[n] = X : "";
        if( Para.textContent[X] == '\n') n++;
    }
    console.log('All "/n" are in the indexs : ' + inx);
    

});




