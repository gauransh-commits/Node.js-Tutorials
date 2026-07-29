// Challenge 1 - Declare an array and store one of its element inside another variable

let teaName = ["green tea", "black tea", "oolong tea"];

let firstTea = teaName[0];
console.log(firstTea);

// Challenge 2 - Declare an array and store its third element in a variable

let cities = ["London", "Tokyo", "Paris", "New York"];

const favouriteCity = cities[2];

console.log(`The third element in the array is ${favouriteCity}`);

// Challenge 3 - Declare an array and change the value of an element in that array

let teaTypes = ["herbal tea", "white tea", "masala chai"];

console.log(`The second element in the array is ${teaTypes[1]}`);

teaTypes[1] = "jasmine tea";

console.log(`The second element in the array is ${teaTypes[1]}`);

// Challenge 4 - Declare an array and push an element in that array

let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited.push("Berlin");

console.log(`The last element in the array is ${citiesVisited[2]}`);

// Challenge 5 - Declaring an array and removing the last element from the array

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let size = teaOrders.length;

console.log(`The length of array teaOrders is ${size}`);
console.log(`The last element in the array before pop operation is ${teaOrders[size-1]}`);

teaOrders.pop(); // pop by default removes the last element from the array
size = teaOrders.length;

console.log(`The length of array teaOrders is ${size}`);
console.log(`The last element in the array before pop operation is ${teaOrders[size-1]}`);

// Challenge 6 - Declaring an array and creating a copy of it 

let popularTeas = ["green tea", "oolong tea", "chai"];

let softCopyTeas = popularTeas; // this is a soft copy. Any change in popularTeas will be reflected here also

// Challenge 7 - Declaring an array and making a hard copy of it 

let topCities = ["Berlin", "Singapore", "New York"];
//let hardCopyCities = [...topCities]; // spread operator

/*
    The Spread operator is used to create shallow copies of arrays with but the nested objects remain references.
*/

let hardCopyCities = topCities.slice();
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

// Challenge 8 - Declaring 2 arrays and merging them

let europeanCities = ["Paris","Rome"];
let asianCities = ["Tokyo","Bangkok"];

let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);

// Challenge 9 - Declaring an array and finding out the length of the array

let teaMenu = ["Masala Chai", "Oolong Tea", "Green Tea", "Earl Grey"];

let menuLength = teaMenu.length;
console.log(menuLength);

//Challenge 10 - Declaring an array and checking if a word exists in that array

let cityBucketList = ["Kyoto", "London", "Cape town", "Vancouver"];

let isLondonList = Boolean(cityBucketList.includes("London"));
console.log(isLondonList); // includes is used to find a particular word in an array

