const express = require('express');
const { error } = require('node:console');
const {loggerMiddleware} = require('./middlewares/logger')

//Importing the custom router
const bookRouter = require('./routes/book_routes');

const app = express();
const PORT = 8000;

// Middlewares (Plugins)
app.use(express.json()); // here, as we have not specified a custom prefix, so it will run for the default prefix which is the '/'.

app.use(loggerMiddleware);

// Routes
app.use('/books', bookRouter)// this tells express that whenever there is a request at / books then use the bookRouter.

app.use('/',(req,res) => { // this is the default route so it should come below our bookRouter so that it does not interfere with the default route('/') of the bookRouter.
    res.send({message: "Welcome to booksStore API"});
}) 

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));