// Conditionals in JavaScript
// Conditionals allow you to execute different blocks of code based on certain conditions. The most common conditional statements in JavaScript are if, else if, and else.
// if and else if statements can be used to check multiple conditions, while else is used to execute a block of code if none of the previous conditions are true.

    let score=85;

if(score >= 90){
    console.log("Grade: A");
} else if(score >= 80){
    console.log("Grade: B");
} else {
    console.log("Grade: C");

}

//ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

let voterage=20;
let canVote = (voterage >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote. 


// switch statement is another way to perform conditional logic based on the value of a variable. 
// It is often used as an alternative to multiple if-else statements when checking for specific values.

let dayOfWeek = 3;

switch(dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day of the week");
}   

let day='Tuesday';

switch(day) {
    case 'Monday':
        console.log("Start of the work week");      
        break;
    case 'Wednesday':
        console.log("Midweek"); 
        break;
    case 'Friday':
        console.log("Almost the weekend");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("Weekend!");
        break;
    default:
        console.log("Just another day of the week");
}

let age = 20;

if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}