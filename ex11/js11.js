//#Source https://bit.ly/2neWfJ2
let btn_var = document.querySelector('button');
let created_element = document.querySelector('.created-element');
let textarea = document.querySelector('textarea');

btn_var = document.addEventListener("click",triggeredbtn =>{


    
    const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
});
