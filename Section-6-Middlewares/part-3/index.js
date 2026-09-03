// const defFunction = require('./modules');

// console.log(defFunction.myFunction(2,5));

// We can also use javascript destructuring 
// Named exports:
const {myFunction,mul,div,sub} = require('./modules'); // here the name of the object should be the same with the name that you are exporting.

console.log(myFunction(4,7));

