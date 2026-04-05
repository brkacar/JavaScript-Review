// try catch with anundefined function

try {
    undefinedFunction();
}catch (error) {
    console.log("An error occurred due to: ", error.message);
} finally {
    console.log("This block will always run, no matter what.");
}

// throwing a custom error

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    console.log("Age is valid.");
    
}
try{
    checkAge(15);
}catch(error){
    console.log("Error is: ", error.message);
}

// error handling in a division function
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }       
    return a / b;
}
try{
    console.log(divide(10, 5));
    console.log(divide(10, 0));
}catch(error){
    console.log("Error is: ", error.message);
}

