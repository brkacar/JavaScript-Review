/*
primitive data types in JS:
- Number
- String
- Boolean
- Undefined
- Null
*/

// Number can be an integer or a floating-point number
let age = 25;
let price = 19.99;
console.log(age); // Output: 25
console.log(price); // Output: 19.99

// String sequence of characters
let nameAlice = "Alice";
console.log(nameAlice); // Output: Alice

// Boolean represents true or false
let isStudent = true;
let hasGraduated = false;
console.log(isStudent); // Output: true
console.log(hasGraduated); // Output: false


// Undefined means a variable has been declared but not assigned a value
let x;
console.log(x); // Output: undefined

// Null represents the intentional absence of any object value
let y = null;
console.log(y); // Output: null

// typeof operator can be used to check the data type of a variable

console.log(typeof age); // Output: number
console.log(typeof nameAlice); // Output: string
console.log(typeof isStudent); // Output: boolean
console.log(typeof x); // Output: undefined
console.log(typeof y); // Output: object (this is a quirk in JavaScript, null is considered an object)      