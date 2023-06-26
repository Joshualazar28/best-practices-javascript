
// ----------------------Rest Operator--------------------------------//
/**
 * displayInfo - A function that displays the name and details of a person.
 * 
 * @param {string} name - The name of the person.
 * @param {...*} details - Additional details about the person.
 * @returns {undefined} - This function does not return a value.
 */
function displayInfo(name, ...details) {
    console.log('Name:', name);
    console.log('Details:', details);
  }
  
  // Example usage:
  displayInfo('Joshua', 22, 'Pakistan', 'Software Engineer');
  // Output:
  // Name: Joshua
  // Details: [22, 'Pakistan', 'Software Engineer']



  
//Combining Arrays
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli'];
const combined = [...fruits, ...vegetables];
console.log(combined); 
// Output: ['apple', 'banana', 'orange', 'carrot', 'broccoli']

  
//   --------------------------End---------------------------------------------------
  

// Spread Operator in JavaScript

// The spread operator, denoted by three consecutive dots (...), is a syntax introduced in ECMAScript 6 (ES6) that allows an iterable (such as an array or string) to be expanded into individual elements. It is primarily used to make copies of arrays, concatenate arrays, and pass multiple arguments to functions.

// 1 -// Copying Arrays:
// You can use the spread operator to create a copy of an existing array.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]


// 2 Concatenating Arrays:
// The spread operator can be used to concatenate multiple arrays into a single array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// Expanding Strings:
// In addition to arrays, the spread operator can also be used with strings to split them into individual characters.
const str = 'Hello';
const characters = [...str];
console.log(characters); // Output: ['H', 'e', 'l', 'l', 'o']




