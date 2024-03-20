
let options = document.querySelector('#optionsList');
let convr = document.querySelector('#Convert')

let out = document.querySelector('#answer_converted');



convr.addEventListener("click", () =>{

    let collection = options.selectedOptions;
    let output = "";
    for (let i = 0; i < collection.length; i++) {
      
        output += collection[i].label;
  
        if (i === collection.length - 2 && collection.length < 3) {
          output += " and ";
        } else if (i < collection.length - 2) {
          output += ", ";
        } else if (i === collection.length - 2) {
          output += ", and ";
        }
      }
      out.value = output;

})