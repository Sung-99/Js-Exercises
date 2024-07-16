//#Source https://bit.ly/2neWfJ2
let btn_var = document.querySelector('button');
let created_element = document.querySelector('.created-element');
let textarea = document.querySelector('textarea');

btn_var = document.addEventListener("click",triggeredbtn =>{

    const el = document.createElement('p');
    created_element.appendChild(el);
    
    const selected = document.getSelection().getRangeAt(0);
    selected.textarea.select();
    //document.execCommand('copy');
    el.textContent = selected.toString();
});
