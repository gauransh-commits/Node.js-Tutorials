const fs = require('node:fs');

const contents = fs.readFileSync('./Section-2-Nodejs/part-4/notes.txt', 'utf-8');

fs.writeFileSync('copy.txt', 'I want to add text', 'utf-8'); // this blocking operation ovewrites the existing content

fs.appendFileSync() // this blocking operation will add the content at the end of the file

fs.mkdirSync('games/xyz/a', {recursive: true}); // here the recursive: true tells Node.js to create the entire path even if the parent directories do not exist

fs.rmdirSync('games');

fs.unlinkSync('copy.txt') // this function is used to delete a file

console.log(contents);
