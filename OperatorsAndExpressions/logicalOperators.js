// && - Logical AND operator: returns true if both operands are true
// || - Logical OR operator: returns true if at least one operand is true
// ! - Logical NOT operator: returns true if the operand is false, and vice versa   

let age = 25;
let isStudent = true;

console.log(age > 18 && isStudent); // Output: true (age is greater than 18 AND isStudent is true)
console.log(age > 30 || isStudent); // Output: true (age is not greater than 30 BUT isStudent is true)
console.log(!isStudent); // Output: false (NOT isStudent is false because isStudent is true)        
