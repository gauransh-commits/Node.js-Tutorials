// Number

let number = 120;
let anotherNumber = new Number(120);

console.log(anotherNumber); // returns a key-value result
console.log(anotherNumber.valueOf());

console.log(typeof(number)); // Number
console.log(typeof(anotherNumber)); // Object

// Primitive can be converted to non-primitive
// Everything is a object in JS

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

console.log(typeof(isActive));
console.log(typeof(isReallyActive));

// null and Undefined

let firstName = null;
let lastName = undefined; // the value is not defined
console.log(firstName);
console.log(lastName);

// String

let myString = "Ansh";
let myStringOne = 'Hola';
let userName = 'Hitesh';

let oldGreet = myString + ' pro';  
console.log(oldGreet);

let greetMessage = `Hello ${myString} !`; // variable usage is easy with the help of backticks
// This is known as String Interpolation
console.log(greetMessage);

let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);


// Symbol -> gives a unique value. used to maintain consistency

let sm1 = Symbol("Ansh");
let sm2 = Symbol("Ansh");

console.log(sm1 == sm2); // returns false since symbols cannot be equal

