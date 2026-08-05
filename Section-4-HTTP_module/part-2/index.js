/*
    Here the main server is logged twice because the callback function provided to http.createServer is invoked once for every HTTP request made to the server.

    two requests were made:
        1. One for the HTML page
        2. One for favicon.ico (the small icon in the browser tab).
*/

const http = require('node:http');
const server = http.createServer(function(req,res) {
    console.log(`Request for: ${req.url}`); // this will show the logs for both the request i.e, '/' and '/favicon.ico'
    console.log("Hey this is the main server!")
    res.writeHead(200);
    res.end('Main Server!!')
});

server.listen(8000, () => console.log(`Server is running on http://localhost:8000`));