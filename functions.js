// simple function
function greet(name) {
    console.log( "Hello, " + name + "!");
}   
greet("Alice"); 

// function with return value
function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log("The sum is: " + sum);

// function with default parameters
function multiply(a, b = 1) {
    return a * b;
}   
console.log("Multiplication result: " + multiply(4)); // uses default value for b
console.log("Multiplication result: " + multiply(4, 2)); // overrides default value for b   

// function expression

const square = function(x) {
    return x * x;
};
console.log("Square of 5: " + square(5));

// arrow function  shorthand syntax for functions introduced in ES6
const cube = (x) => {
    return x * x * x;
};
console.log("Cube of 5: " + cube(5));

const sum2=(a,b)=>a+b;
console.log("Sum of 3 and 4: " + sum2(3, 4));

const areaOfRectangle=(length,width)=>length*width;
l=5;
w=4;
console.log(`Area of rectangle with length ${l} and width ${w}: ` + areaOfRectangle(l, w));

