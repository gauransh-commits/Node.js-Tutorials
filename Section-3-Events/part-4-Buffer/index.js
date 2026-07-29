const {Buffer} = require("buffer");

// const myBuffer = new Buffer.alloc(4);
// console.log(myBuffer[1]);

const buf = Buffer.from('Hello Chai');
console.log(buf);
console.log(buf.toString());


const bufTwo = Buffer.allocUnsafe(10); // tries to grab a piece of memory which may contain garbage values. This memory block may contain garbage value
console.log(bufTwo);

const bufThree = Buffer.alloc(10);
bufThree.write('Hello Brother');
console.log(bufThree.toString()); // this will result in 'Hello Brot' since the memory allocation is done for only 10 bytes

const bufFour = Buffer.from('Console.log');
console.log(bufFour.toString('utf-8', 0, 4)); // prints the value of bufFour from 0 to 4.

const bufFive = Buffer.from("Bro");
bufFive[0] = 0x4A; // this replaces J in place of B in "Bro"
console.log(bufFive);
console.log(bufFive.toString());

// Buffer Concatenation
const bufSix = Buffer.from("Hello ");
const bufSeven = Buffer.from("Gauransh");
const merged = Buffer.concat([bufSix,bufSeven]);
console.log(merged.toString());
