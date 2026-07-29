/*
    Break exits from the whole loop whereas continue skips the current execution
*/

// Challenge 1 - Looping through an array and storing all elements in a new array

let teaType = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for(let i=0;i<teaType.length;i++){
    if (teaType[i] == "chai") {
        break;
    }
    else{
        selectedTeas.push(teaType[i]);
    }
}

console.log(selectedTeas);

// Challenge 2 - looping through an array and skipping a particular element and saving rest of the elements in another array

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "Paris") {
        continue; // continue skips the current iteration block and immediately jumps to the next execution code
    } else{
        visitedCities.push(cities[i]);
    }
}

console.log(visitedCities);

// Challenge 3 - looping through an array and storing elements before a particular element in another array

let nums = [1,2,3,4,5];
let smallNumbers = [];

for (const element of nums) {
// for-of loops iterates over the values of iterable objects rather than their indices.
    if(element===4){
        break;
    }
    smallNumbers.push(element);
}

console.log(smallNumbers);

// Challenge 4 - Iterating over an array and skipping one element of an array and storing rest of the elements in another array

let teas = ["green tea", "black tea", "herbal tea", "oolong tea"];
let preferredTeas = [];

for (const tea of teas) {
    if (tea === "herbal tea") {
        continue; 
    } else{
        preferredTeas.push(tea);
    }
}

console.log(preferredTeas);

// Challenge 5 - Looping through an array and skipping a particular element in an array and storing rest of the elements in another array using for-in loop

let citiesPopulation = {
    "London":8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin":3500000,
};

let cityPopulations = {}
/*
    for-in iterates over the enumerable property keys (indices or names).
*/

for (const city in citiesPopulation) { // here city is the represents as the key in citiesPopulation
    if (city == "Berlin") {
        continue;
    } else{
        cityPopulations[city] = citiesPopulation[city];
    }
}

console.log(cityPopulations);

// Challenge 6 - Looping through an object containing city populations and skipping a population below 3 million and storing the rest of the elements in another array

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
}

let largeCities = {};

for (const city in worldCities) {
    if (worldCities[city] < 3000000){
        continue;
    }
    largeCities[city] = worldCities[city];
}

console.log(largeCities);

// Challenge 7 - Using forEach loop to iterate over an array and storing the elements in another array while discarding the element having value "chai"

/**
    forEach() method passes three arguments to be callback
        1. The current element
        2. it's index
        3. the array itself

    We can also just pass the the current element like in the below example we are using 'tea' to represent the elements in the teaTypes array.
*/

let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaTypes.forEach(tea => {
    if (tea == "chai") {
        return;
    }
    availableTeas.push(tea);
});

console.log(availableTeas);

// Challenge 8 - Using a forEah loop to iterate over an array and storing the elements in another array while skipping an element

let availableCities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

availableCities.forEach((city,index) => {
    if (availableCities[index] == "Sydney") {
        return
    }
    traveledCities.push(city);
})

console.log(traveledCities);

// Challenge 9 - Iterating over an array using for-loop and skipping a value and multiplying rest of the values with 2

let numbers = [2,5,7,9];
let result = [];

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] == 7) {
        continue;
    }
    const product = numbers[index] * 2;
    result.push(product);
}

console.log(result);

// Challenge 10 - using a for-of loop to iterate through an array and stopping when the length of the current tea name is greater than 10, and storing rest of the elements in the result

let currentTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let remainingTeas = [];

for (const tea of currentTeas) {
    if(tea.length > 10){
        continue;
    }
    remainingTeas.push(tea);
}

console.log(remainingTeas);
