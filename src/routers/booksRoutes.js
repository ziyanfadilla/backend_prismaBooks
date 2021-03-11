const booksRoutes = require('express').Router();
const addBooks = require('../controllers/addBooks');

booksRoutes.get('/', addBooks.getBooks);
booksRoutes.post('/', addBooks.addBooks);
booksRoutes.put('/:id', addBooks.updateBooks);
booksRoutes.delete('/:id',addBooks.deleteBooks);

module.exports = booksRoutes;

