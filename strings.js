let singlequote = 'Hello, World!';
let doublequote = "Hello, World!";
let backticks = `Hello, World!`;  //Alt+96

console.log(singlequote); // Output: Hello, World!
console.log(doublequote); // Output: Hello, World!
console.log(backticks); // Output: Hello, World!

let n = "Alice";
let message = "Hello, " + n + "!"; // Concatenation using +
console.log(message); // Output: Hello, Alice!
let greeting = `Hello, ${n}!`;
console.log(greeting); // Output: Hello, Alice!

// toUpperCase and toLowerCase and trim
let message2="  Hello, JavaScript!  ";
console.log(message2.toUpperCase()); // Output: HELLO, JAVASCRIPT!
console.log(message2.toLowerCase()); // Output: hello, javascript!
console.log(message2.trim()); // Output: Hello, JavaScript!
console.log(message2.trim().toUpperCase()); // Output: HELLO, JAVASCRIPT!

// length
let message3 = "Hello, World!";
console.log(message3.length); // Output: 13