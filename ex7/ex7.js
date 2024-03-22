
let options = document.querySelector('#optionsList');
let options2 = document.querySelector('#optionsList2');

let convr = document.querySelector('#Convert')

let out = document.querySelector('#answer_converted');

let inputEntry = document.querySelector('#answer');

convr.addEventListener("click", () =>{

    
   
      if(options.selectedOptions[0].label == "Decimal" && options2.selectedOptions[0].label == "Binario" )
      {
        out.value = parseInt(inputEntry.value) +2;
      } 
      

})