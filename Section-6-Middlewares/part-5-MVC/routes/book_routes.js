const express = require('express');
const controller = require('../controllers/book.controller')

const router = express.Router();

router.get('/', controller.getAllBooks);

router.get('/:id', controller.getBooksById);

router.post('/',controller.createBook);

router.delete('/:id', controller.deleteBookById)

// This replaces the entire default exports object with your function.
module.exports = router; // we use module.exports = router when we want to export the entire configured router instance as a single callable function 