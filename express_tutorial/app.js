// https://github.com/john-smilga/node-express-course
// use Express 
// use Path

const express = require('express');
const path = require('path');

const app = express();
// ### Create Public folder
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});


app.all('*', (req, res) => {
    res.status(404).send('Resource not founded');
})

app.listen(5000, () => {
    console.log('Server is listening on PORT: 5000');
});