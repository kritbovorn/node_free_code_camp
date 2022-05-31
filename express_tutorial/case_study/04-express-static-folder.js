const express = require('express');
const path = require('path');

const app = express();


// Use :  express.static() :  for can call all file Global that live in ./public folder: Thank 'express'
app.use(express.static('./public'));

// ########### Good from call index.html another Path
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// ### Auto Call index.html from './public' folder Auto Auto Auto

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('./public/about.html'));
})

app.all('*', (req, res) => {
    // res.status(404).send('Oops!!! 404: Page not founded');
    res.status(404).sendFile(path.resolve('./public/404.html'));
})

app.listen(5000, () => {
    console.log('Server is listening on PORT: 5000...');
});