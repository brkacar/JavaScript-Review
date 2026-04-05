let a=10
let b=5

console.log(a + b); // Output: 15 (Addition)
console.log(a - b); // Output: 5 (Subtraction)
console.log(a * b); // Output: 50 (Multiplication)
console.log(a / b); // Output: 2 (Division)
console.log(a % b); // Output: 0 (Modulus - remainder of division)
console.log(a ** b); // Output: 100000 (Exponentiation - a raised to the power of b)    

// operator precedence determines the order in which operations are evaluated in an expression.
// In JavaScript, the operator precedence from highest to lowest is as follows:
// 1. Parentheses ()
// 2. Exponentiation (**)
// 3. Multiplication (*), Division (/), Modulus (%)
// 4. Addition (+), Subtraction (-)

let result = a + b * 2; // Multiplication is evaluated first, then addition
console.log(result); // Output: 20 (5 * 2 is evaluated first, then added to 10)

result = (a + b) * 2; // Parentheses are evaluated first, then multiplication
console.log(result); // Output: 30 (10 + 5 is evaluated first, then multiplied by 2)