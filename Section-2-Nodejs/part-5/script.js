const fs = require('node:fs');

console.log('Start of the Script');

// Sync => Blocking operations
// Blocking operations are not preferred while building web servers because the whole server cannot be blocked for one user and other users will have to face a downtime 
const contents = fs.readFileSync('./Section-2-Nodejs/part-1/notes.txt', 'utf-8');
console.log('Contents', contents);

console.log('End of the Script');

// Async => Non-blocking operation
// Async functions require a callback function
fs.readFile('./Section-2-Nodejs/part-1/notes.txt', 'utf-8', function(error,data){
    if (error){
        console.log(error);
    } else{
        console.log('Content got', data)
    }
})

