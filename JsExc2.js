/*
Question

**Given an integer array arr and a mapping function 
fn, return a new array with a transformation applied 
to each element.

**The returned array should be created such that returnedArray[i] = fn(arr[i], i).

**Please solve it without the built-in Array.map method.

*/

/*

**With help:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
**https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

*/

//My solution

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  
    let result =[ new Array(arr.length)];
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }
    return result;
  
};