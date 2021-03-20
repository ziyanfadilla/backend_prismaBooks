require('dotenv').config({});
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001

const mainRouters = require('./src/routers');
 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded ({extended : false}));
app.use('/', mainRouters);


app.listen(port, () => {
    console.log("server berjalan");
});