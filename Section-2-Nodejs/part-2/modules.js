const fs = require('fs'); // require function is only available in the Node.js environment

//console.log(fs);

const content = fs.readFileSync('Section-2-Nodejs/part-2/notes.txt', 'utf-8');

console.log(content);
