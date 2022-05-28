const http = require('http');

// สร้าง Server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Homepage()');
    }
    if (req.url === '/about') {
        res.end('About us');
    }
    res.end(` <h1>Oops!!!</h1> <p>We cannot see to find the page you are looking for:</p> <a href="/">Back to home page</a> `);
});

// Use port 5000
server.listen(5000);