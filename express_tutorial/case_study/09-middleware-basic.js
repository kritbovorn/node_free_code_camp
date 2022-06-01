const express = require('express');
const loggerMiddleWare = require('./logger_middle_ware');

const app = express();

// Middleware :     ( req => middleware => res )

app.get('/', loggerMiddleWare, (req, res) => {

    res.status(200).send('Home Page');
});


app.get('/about', loggerMiddleWare, (req, res) => {

    res.status(200).send('About Me');
});

app.get('/api/products', loggerMiddleWare, (req, res) => {
    res.send('Products');
});

app.get('/api/items', loggerMiddleWare, (req, res) => {
    res.send('Items');
});


app.listen(5000, () => {
    console.log('Server is listening on PORT: 5000......');
});