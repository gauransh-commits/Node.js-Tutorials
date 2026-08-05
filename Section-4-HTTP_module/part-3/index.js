const http = require('http');
const PORT = 8000;

const myServer = http.createServer(function (req,res){
    console.log(req.headers); // logs every header in the request body

    // Here we can use Javascript in the frontend to request a particular method. Eg:- fetch('/contact-us', {method:'PATCH'} );
    // Here we are fetching the PATCH method on url -> '/contact-us'
    console.log(req.method); 

    // Default Status code
    res.writeHead(200); // this line would have logged an error in the older versions of the Node.js because earlier version followed a strict rule about calling the writeHead() multiple times.

    switch(req.url) {
        case '/': 
            return res.end('Homepage');
        case '/contact-us':
            return res.end('Contact us page!');
        case '/about-me':
            return res.end('Hey i am a MCA student');
        default:
            res.writeHead(404); // here the status code is overwritten
            return res.end('404 ERROR NOT FOUND');
    }
    res.end(`Hey, you can accept ${req.headers['accept-language']}`);
})

myServer.listen(PORT,() => console.log(`Server is running on http://localhost:${PORT}`));