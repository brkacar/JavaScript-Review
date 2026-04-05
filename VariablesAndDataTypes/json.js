const jsonData = '{"name": "John Doe", "age": 30, "isStudent": false}';

// JSON.parse() is used to convert a JSON string into a JavaScript object   
const parsedData = JSON.parse(jsonData); 
console.log(parsedData.name); // Output: John Doe
console.log(parsedData.age); // Output: 30
console.log(parsedData.isStudent); // Output: false

// JSON.stringify() is used to convert a JavaScript object into a JSON string
const person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"Alice","age":25,"isStudent":true}  

// 
const apiResponse = '{"users":[{"name":"Alice","age":25},{"name":"Bob","age":30}]}';
const data = JSON.parse(apiResponse);

data.users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});

const newUser = {
    name: "Charlie",
    age: 28
};

data.users.push(newUser);
const updatedJsonString = JSON.stringify(data);
console.log(updatedJsonString); // Output: {"users":[{"name":"Alice","age":25},{"name":"Bob","age":30},{"name":"Charlie","age":28}]}