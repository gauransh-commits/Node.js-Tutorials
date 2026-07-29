/* 
prompt() does not work in Node.js environment
prompt() is a browser-specific API
we need to use a third-party library(prompt-sync)
npm install prompt-sync
*/

const prompt = require('prompt-sync');

// Challenge 1 - Calculate sum of 1-5 using While loop

let num = 5;
let sum = 0;

while(num > 0){
    sum += num; 
    num--;
}

console.log(sum);

// Challenge 2 - Store numbers from 1 - 5 in an array using while loop

let num1 = 5;
let countdown = [];

while(num1 > 0){
    countdown.push(num1);
    num1--;
}

console.log(countdown);

// Challenge 3 - Using do while loop take input from the user 
/*
let flag = true;
let teaType;
let teaCollection = [];

do{
    teaType = prompt("Enter Tea that you like/enter 'stop' to exit:");
    if(teaType != "stop"){
        teaCollection.push(teaType);
    }
    else{
        flag=false
    }
}while(flag);

console.log(teaCollection);
*/

// Challenge 4 - Adding numbers from 1 - 3 using do while loop

let result = 0;
let numbers = 1;

do{
    result += numbers;
    numbers++;
}while(numbers<=3)

console.log(result);
    
//Challenge 5 - Performing Multiplication between an array and 2 using for loop

let digits = [2,4,6];
let digitsSize = digits.length;
let multipliedNumbers = [];

for(i=0;i<digitsSize;i++){
    let product = digits[i] * 2;
    multipliedNumbers.push(product);
}

console.log(multipliedNumbers);

// Challenge 6 - Listing the elements of an array and storing them in another array using for loop

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (i=0;i<cities.length;i++){
    cityList.push(cities[i]);
}

console.log(cityList);

