// This file is very critical and should be protected since it contains all the functionality of the routes

const { BOOKS } = require("../models/books")

exports.getAllBooks = function(req,res) {
   res.json(BOOKS);
}

exports.getBooksById = function(req,res){
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
}

exports.createBook = function(req,res){
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
}

exports.deleteBookById = function(req,res){
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
}
