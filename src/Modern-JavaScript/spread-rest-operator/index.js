
// ----------------------Rest Operator--------------------------------//
// Rest operator, denoted by three consecutive dots (...), is a syntax introduced in ECMAScript 6 (ES6) that allows you to represent an indefinite number of function arguments as an array. It is used in function declarations and function expressions to capture multiple arguments into a single parameter.
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

// rest Operator used in Object
const originalObject = {
    username: 'Joshua',
    age: 22,
    city: 'Lahore',
    country: 'Pakistan',
  };
  
  // Extracting specific properties from the original object
  const { username, age, ...rest } = originalObject;
  
  console.log(username); // Output: Joshua
  console.log(age); // Output: 30
  console.log(rest); // Output: { city: 'New York', country: 'USA' }
  
  
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





// Spread operator used in object 
const obj1 = { name: 'joshua lazar', age: 22 };
const obj2 = { city: 'Lahore', country: 'Pakistan' };



// Creating a shallow copy of an object
const copiedObj = { ...obj1 };
console.log(copiedObj); // Output: { name: 'joshua lazar', age: 22 }



// Merging multiple objects
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { name: 'joshua lazar', age: 22, city: 'Lahore', country: 'Pakistan' }




const person = { name: 'Joshua', age: 20 };
// Updating the value of the 'age' property
const updatedPerson = { ...person, age: 2 };
console.log(updatedPerson); // Output: { name: 'John', age: 23 }
