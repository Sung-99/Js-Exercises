let button = document.querySelector('#btn-make');
let numberInputed = document.querySelector("#in-number");
let answerArea = document.querySelector('#answer-solution');



button.addEventListener("click", () =>{

    answerArea.textContent = numberInputed.value;


});
    
