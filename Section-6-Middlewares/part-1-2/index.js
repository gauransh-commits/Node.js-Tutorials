const e = require('express');
const express = require('express');
const { error } = require('node:console');
const fs = require('node:fs');

const app = express();
const PORT = 8000;

const books = [
    {
        id:1,
        title: "Book One",
        author: "Author One",
    },
    {
        id:2,
        title: "Book Two",
        author: "Author Two",
    }
]

app.use(function (req,res,next) {
    const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
    fs.appendFileSync('logs.txt', log,'utf-8');
    next();
})

function customMiddleware(req,res,next) {
    console.log('I am a custom middleware!');
    next();
}

// Middlewares (Plugins)
// Global Middlewares
app.use(express.json()); // here, as we have not specified a custom prefix, so it will run for the default prefix which is the '/'.

app.use(customMiddleware); // this is a custom middleware

app.use('/books',(req,res,next) => {
    try{
        console.log(`This a default middleware for ${req.originalUrl} route`);
        next();
    }
    catch(err){
        res.json(err);
    }
})

//Middleware A
// app.use('/books',function(req,res,next){ // here, this middleware will only run for the custom prefix(URL) '/books'
//     console.log( "I am middleware A");
//     next();
// })

// Routes
app.get('/', (req,res) => {
    res.end("Hello World!");
})

app.get('/books', (req,res) => {
    res.setHeader('x-abc', 'Gauransh-Sharma'); // Custom header
    res.json(books); // here the books object will be send as a JSON object.
})

/*
    In this get request, if there is a request on /books/:id, then first run the customMiddleware.
    This middleware can either modify something in the request or it can also end the req-res cycle.
    Otherwise it will call the next middleware in the stack.
*/
app.get('/books/:id', customMiddleware, (req,res) => { // here id is a path/route parameter. we can pass multiple path parameters.
    const id = parseInt(req.params.id) // Here the name of the path parameter and property name should be the same.
    const book = books.find(e => e.id === id); // Here e is an arbitrary variable. For every item in the array, .find() passes that item into the function as e to test if e.id matches the target id
    // res.end(`The book that you want is ${books}`); this line will cause error because when a book does not exist.

    if (isNaN(id)){
        return res
        .status(400) // 404 is the status code for bad request.
        .json(`Bad Request. Book id should be of numeral type.`)
    }

    if(!book){
        return res
        .status(404)
        .json({error: `Boook with the ${id} does not exist!`});
    }
    return res.json(book);

});

app.post('/books',(req,res) => {
    const {title,author} = req.body;

    //  Validation
    if(!title || title === '')
        return res.status(400).json({ error:'Book title is required.'});

    if(!author || author === '')
        return res.status(400).json({ error: 'Book author is required!'});

    const bookCount = books.length;

    const book = {id: bookCount + 1, title, author}
    books.push(book);

    return res
    .status(201)
    .json({ message: 'Book created successfully!'});
})

app.delete('/books/:id', (req,res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id))
        return res
        .status(404)
        .json({message: 'The id type should be of int'});

    const indexToDelete = books.findIndex(e => e.id === id);

    if(indexToDelete < 0)
        return res
        .status(404)
        .json({message: `The book with id ${id} does not exist!`});

    books.splice(indexToDelete,1);

    return res.json({message: 'The book is successfully deleted!'})
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));