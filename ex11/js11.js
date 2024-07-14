//#Source https://bit.ly/2neWfJ2
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