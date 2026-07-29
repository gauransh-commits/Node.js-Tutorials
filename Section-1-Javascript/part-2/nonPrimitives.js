// Objects

let username = {
    firstname: "Ansh", 
    "middle name": "gauri",
    lastname: "Sharma",
}; 

// Constant objects reserve a memory space that cannot be changed
// but the primitives inside the memory can be changed
const isLoggedIn = {
    loggedIn: true,
}

isLoggedIn.loggedIn = false; // the memory reference remains the same just the value in that memory reference is changed

console.log(username);
console.log(username["middle name"]);
console.log(username.firstname.valueOf());
console.log(typeof(username));

let today = new Date();
console.log(today.getDate());

// Array -> collection of things

let heroes = ["Superman", true];

console.log(heroes[0]);

let isValue = "2abc";
console.log(Number(isValue)); // Implicit type conversion

let random = 20;
let num1 = null;
console.log(num1 - Number(random));

let numString = ["Boolean", false];
console.log(Number(numString[1] = true));

let object1 = {
    num1: 20,
    "num 2": "20",
}

console.log(object1.num1 + Number(object1["num 2"]));
