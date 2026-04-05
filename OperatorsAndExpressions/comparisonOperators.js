// Comparison Operators in JavaScript
// Comparison operators are used to compare two values and return a boolean result (true or false).
    
let x=5;
let y=10;

console.log(x > y); // Output: false (x is not greater than y)
console.log(x < y); // Output: true (x is less than y)
console.log(x >= 5); // Output: true (x is greater than or equal to 5)
console.log(y <= 10); // Output: true (y is less than or equal to 10)
console.log(x === 5); // Output: true (x is strictly (value and type) equal to 5)
console.log(y !== 5); // Output: true (y is not strictly equal to 5)
console.log(x == '5'); // Output: true (x is loosely equal to '5' - type coercion occurs)
console.log(x === '5'); // Output: false (x is not strictly equal to '5' - different types)     
console.log(x != '5'); // Output: false (x is loosely not equal to '5' - type coercion occurs)
console.log(x !== '5'); // Output: true (x is strictly not equal to '5' - different types)

let fiveNumber = 5;
let fiveString = '5';

console.log(fiveNumber == fiveString); // Output: true (loose equality - type coercion occurs)
console.log(fiveNumber === fiveString); // Output: false (strict equality - different types)