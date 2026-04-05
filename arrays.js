let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Cherry"

// Adding an element to the end of the array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]   

// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// shift() removes the first element from the array
fruits.shift();
console.log(fruits); // Output: ["Banana", "Cherry"]

// unshift() adds an element to the beginning of the array
fruits.unshift("Apricot");
console.log(fruits); // Output: ["Apricot", "Banana", "Cherry"]

// foreach loop to iterate over the array
fruits.forEach(num=>console.log(num)); // Output: Apricot, Banana, Cherry

let numbers = [1, 2, 3,4,5];
numbers.forEach(num => console.log(num)); // Output: 1, 2, 3, 4, 5

// map() creates a new array by applying a function to each element of the original array
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

// filter() creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4] 

// reduce() applies a function against an accumulator and each element in the array to reduce it to a single value
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

