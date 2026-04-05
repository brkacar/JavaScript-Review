let person = {
    name: "Alice",
    age: 30,   
    isStudent: false,
    sayHello: function() {   
        console.log("Hello, " + this.name + "!");
     }
};

console.log("Name: " + person.name); // Accessing properties using dot notation
console.log("Age: " + person["age"]); // Accessing properties using bracket notation
console.log(person.sayHello()); // Calling a method of the object   

person.name = "Bob"; // Modifying a property
console.log("Updated Name: " + person.name);    

// Adding a new property
person.city = "New York";
console.log("City: " + person.city);

// Deleting a property
delete person.isStudent;
console.log("Is Student: " + person.isStudent); // Output: undefined    

// Object with a method
person.greet = function() {
    console.log("Hello, my name is " + this.name);
};
person.greet(); // Output: Hello, my name is Bob


// nested objects
let company = {
    name: "Tech Co",
    employees: [
        { name: "Alice", position: "Developer" },
        { name: "Bob", position: "Designer" }
    ]
};
console.log("Company Name: " + company.name);
console.log("Employee 1: " + company.employees[0].name + " - " + company.employees[0].position);
console.log("Employee 2: " + company.employees[1].name + " - " + company.employees[1].position);


//