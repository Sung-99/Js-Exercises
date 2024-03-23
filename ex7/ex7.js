
let options = document.querySelector('#optionsList');
let options2 = document.querySelector('#optionsList2');

let convr = document.querySelector('#Convert')

let out = document.querySelector('#answer_converted');

let inputEntry = document.querySelector('#answer');

let myBin = [];

convr.addEventListener("click", () =>{


      let convertedNumb = parseInt(inputEntry.value);  
      if(options.selectedOptions[0].label == "Decimal" && options2.selectedOptions[0].label == "Binario" )
      {
        //Easy solution*****
       while(convertedNumb >= 1){ 
        if(convertedNumb % 2 == 0) {
            myBin.push(0);
           
        }else{
            myBin.push(1);
            
        }
        convertedNumb = Math.floor(convertedNumb/2);
       }
    
       
       let instantialVariablw = myBin.toReversed().join("");
       out.value = instantialVariablw;
       
       
      } 
      

})