const express = require('express');
const {BOOKS} = require('../db/books'); // importing the Books DB
const router = express.Router();

// since every request is for route books so we will remove it.

router.get('/', (req,res) => {
    res.setHeader('x-abc', 'Gauransh-Sharma'); // Custom header
    res.json(BOOKS); // here the books object will be send as a JSON object.
})

router.get('/:id', (req,res) => { // here id is a path/route parameter. we can pass multiple path parameters.
    const id = parseInt(req.params.id) // Here the name of the path parameter and property name should be the same.
    const book = BOOKS.find(e => e.id === id); // Here e is an arbitrary variable. For every item in the array, .find() passes that item into the function as e to test if e.id matches the target id
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

router.post('/',(req,res) => {
    const {title,author} = req.body;

    //  Validation
    if(!title || title === '')
        return res.status(400).json({ error:'Book title is required.'});

    if(!author || author === '')
        return res.status(400).json({ error: 'Book author is required!'});

    const bookCount = BOOKS.length;

    const book = {id: bookCount + 1, title, author}
    BOOKS.push(book);

    return res
    .status(201)
    .json({ message: 'Book created successfully!'});
})

router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id))
        return res
        .status(400) // bad request
        .json({message: 'The id type should be of int'});

    const indexToDelete = BOOKS.findIndex(e => e.id === id);

    if(indexToDelete < 0)
        return res
        .status(404) // resource cannot be located.
        .json({message: `The book with id ${id} does not exist!`});

    BOOKS.splice(indexToDelete,1);

    return res.json({message: 'The book is successfully deleted!'})
})

// This replaces the entire default exports object with your function.
module.exports = router; // we use module.exports = router when we want to export the entire configured router instance as a single callable function 