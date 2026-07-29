// Checking if a number is greater than the other

let a = 20;
let b = 22;

if (a < b) {
    console.log(`${a} < ${b}`);
} else {
    console.log(`${a} > ${b}`);
}

// Checking if a string is equal to another String

let name1 = "Ansh";
let name2 = "Ansh";

if (name1 == name2){
    console.log(`${name1} is equal to ${name2}`); 
}
else {
    console.log(`${name1} is not equal to ${name2}`);
}

// Checking is a variable is a number or not

let num1 = "20";

/* 
if (typeof(num1) != Number){
    console.log(`${num1} is not a number`);
} else{
    console.log(`${num1} is a number`);
}
*/

// The typeof() method always returns a string

// Checking if a boolean value is true or false

let boolean = true;

if (boolean) {
    console.log("The value of boolean is true");
} else{
    console.log("The value is false");
}

// Checking if an array is empty or not:

let items = ["Ansh"];

if (items[0] == null) {
    console.log("The size of the array is zero");
} else{
    console.log("The array is not empty");
    
}
// We can also use the items.length method also