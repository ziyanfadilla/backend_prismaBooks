const booksRoutes = require('express').Router();
const addBooks = require('../controllers/addBooks');

booksRoutes.get('/', addBooks.getBooks);
booksRoutes.post('/', addBooks.addBooks);

module.exports = booksRoutes;

