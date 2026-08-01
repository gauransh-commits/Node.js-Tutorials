// npm init -y --> shell command which is used to initialize npm and skips all the questions required and goes with the default

// One thing to remember is that everytime we make a change in our server, we need to restart the server so that the changes can be reflected

const http = require('http'); // http module is used to create a server

const PORT = 8000;

/*
    Here the 'req' object will contain the request method (GET,POST,PATCH) and will also contain what this user is trying to access.
    Also using the 'res' object we can create a response 
*/
const server = http.createServer(function (req, res) { // takes in a callback function and gives us access to two things request and a response.
    console.log('Incoming request');
    // Here it is mandatory to send a response or else it will lead to an endless loop.
    res.writeHead(200);
    res.end('Thanks for visiting our server');
}); 

server.listen(PORT, function() {
    console.log(`HTTP server is up and running on PORT:${PORT}`);
})

