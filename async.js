/*
console.log("Start")

// Simulating an asynchronous operation using setTimeout
setTimeout(() => {
    console.log("Async operation completed");  // runs after 1 second so after End is printed
}, 1000);

console.log("End")

// callback is a function passed as an argument to another function 
// and is executed after some operation is completed

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Alice" };
        callback(data); // calling the callback function with the fetched data
    }, 2000);   
}

fetchData((data) => {
    console.log("Data received:", data); // Output: Data received: { id: 1, name: "Alice" }
});



// Promises are used to handle asynchronous operations in a more manageable way

const fetchDataPromise = new Promise((resolve, reject) => {
  console.log("Fetching data...");

  const success = false; // Simulate success or failure

  if (success) {
    resolve("Data fetched successfully!"); // Resolve the promise
  } else {
    reject("Error fetching data!"); // Reject the promise
  }
});

// Using the promise
fetchDataPromise
  .then((data) => {
    console.log(data); // Handle the resolved value
  })
  .catch((error) => {
    console.error(error); // Handle the rejected value
  });

*/ 

// Async/Await is a syntactic sugar built on top of promises that allows you to write asynchronous code in a more synchronous manner
// await can only be used inside an async function
// Simulate fetching data with a Promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 4000); // Simulate a 4-second delay
  });
}


// Async function that uses await
async function getData() {
  console.log("Fetching data...");
  const result = await fetchData(); // Wait for fetchData to resolve
  console.log(result); // Logs the resolved value from fetchData
}

// Call the async function
getData();


