//#Source https://bit.ly/2neWfJ2
let btn_var = document.querySelector('button');
let created_element = document.querySelector('.created-element');
let textarea = document.querySelector('textarea');

btn_var = document.addEventListener("click",triggeredbtn =>{

   // const el = document.createElement('p');
    //created_element.appendChild(el);
    //el.textContent = textarea.value;
    const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    textarea.select();
    document.execCommand('copy');

});
const copy_to_Clipboard = str => {
    const el = document.querySelector('textarea');
    
    const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
  
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };