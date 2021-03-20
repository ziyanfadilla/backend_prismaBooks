const mainRouters = require('express').Router();

const addBooks = require ('../controllers/addBooks');
const auth = require('../controllers/auth/authControllers');
const authRouter = require('./authRouter');
const booksRoutes = require('./booksRoutes');
const categoryRouter = require('./categoryRoutes');
const userRoutes = require('./usersRouters');
const borrowRoutes = require('./borrowRoutes');
const ratingRoutes = require('./ratingRoutes');
const diskusiRoutes = require('./diskusiRouter');


mainRouters.use('/books', booksRoutes);
mainRouters.use('/auth', authRouter);
mainRouters.use('/category', categoryRouter);
mainRouters.use('/users', userRoutes);
mainRouters.use('/borrow',borrowRoutes);
mainRouters.use('/rating', ratingRoutes);
mainRouters.use('/diskusi', diskusiRoutes);


module.exports = mainRouters