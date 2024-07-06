//#Source https://bit.ly/2neWfJ2
// Define a function called `matches` that takes two objects as arguments and checks if the first object contains all the key-value pairs of the second object.
const matches = (obj, source) =>
    // Iterate over each key in the source object and check if it exists in the obj object and has the same value.
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  // Test cases:
  console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
  console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
  console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false 
