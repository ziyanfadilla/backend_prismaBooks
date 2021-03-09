const mainRouters = require('express').Router();

const addBooks = require ('../controllers/addBooks');
const booksRoutes = require('./booksRoutes');


mainRouters.use('/books', booksRoutes);


module.exports = mainRouters