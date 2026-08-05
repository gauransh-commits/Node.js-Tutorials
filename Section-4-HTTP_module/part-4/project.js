const http = require('node:http');
const fs = require('node:fs');

const myServer = http.createServer(function (req,res) {
    
    //res.writeHead(200); This line threw error, stating: cannot set headers after response is already sent.

    const log = `\n[${Date.now()}]: ${req.method} ${req.url}`;
    fs.appendFileSync('log.txt',log,'utf-8'); // logs every request

    switch(req.method){
        case 'GET':
            switch(req.url){
                case '/':
                    console.log(req.headers,req.method);
                    return res.writeHead(200).end('Hello');
                case '/contact-us':
                    return res.writeHead(200).end('email: igauransh2005@gmail.com, contact_number: 9123458911');
                case '/tweet':
                    return res.writeHead(200).end("Tweet: Hello World");
            }
        break;
        case 'POST':
            switch(req.url){
                case '/tweet':
                    res.writeHead(201);
                    return res.end('Tweet created!');
            }
    }
})

myServer.listen(8000,() => console.log("Server is running on http://localhost:8000"));