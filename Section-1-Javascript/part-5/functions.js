// Challenge 1 - Creating a function which takes a parameter and returns a concatenated string when called with another element and storing it in a result

function makeTea(typeOfTea){ // here typeOfTea is a parameter
    return "Making ".concat(typeOfTea);
}

let teaOrder = makeTea("green tea"); // here green tea is an argument
console.log(teaOrder);

// Challenge 2 - Creating a function that takes one parameter and inside this function there is another function that takes that parameter and returns a string. We have to call the child function within the parent function and returning the result

function orderTea(teaType) {

    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    };
    return confirmOrder();
}

let result = orderTea("green tea"); // here we do not pass any value and try to print this then the result would be undefined 
console.log(result);

// Challenge 3 - Using arrow function 

() => {} // unnamed arrow function

const calculateTotal = (price, quantity) => {
    const cost = price * quantity;
    return `The total cost is: ${cost}`;
}

let totalCost = calculateTotal(20,4); // Whereas, here if we do not pass a value then the result would be NaN.
console.log(totalCost);

/*
    Implicit arrow function is a type of function which is used when we want to execute a single line of code
*/
const claculateArea = (l,b) => l*b

console.log(claculateArea(4,3));


// Challenge 4 - using a function that takes another function as parameter and calls it using a string and returning the result in another variable

/*
    The below code is an example of First-class function where a function is passed as an argument just like a variable to another function and can be returned by another function.
    forEach is an example of higher order function
*/
function processTeaOrder(teaFunction){
    return teaFunction("earl grey") // here the actual function is being returned. From here the control is transferred to the function passed as parameter
}

function makeTea(typeOfTea){
    return typeOfTea;
}

let makesTea = processTeaOrder(makeTea); // From this line the control is transferred to processTeaOrder().
console.log(makesTea);

// Challenge 5 - creating a function that returns another function. The returned function should take one parameter and return a message. Also storing that result in another variable and calling it with a string

/*
    The below code is an example of nested functions
*/

function createTeaMaker(typeOfTea){
    return typeOfTea;
}

function teaVarities(type){
    return type("green tea");
}

function teaType(tea){
    return "Making green tea";
}

let result1 = createTeaMaker(teaVarities(teaType));
console.log(result1);


function A(name){
    return function (input){
        return `Inside function ${input}
        Name is: ${name}`;
    }
}

let answer = A("Ansh");
let fullAnswer = answer("B");
console.log(fullAnswer);