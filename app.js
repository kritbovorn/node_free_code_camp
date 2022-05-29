const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request Event');
    res.end(' Hello World!');
});

server.listen(5000, () => {
    console.log('This Server listening on PORT: 5000.....');
});