// https://github.com/john-smilga/node-express-course


const http = require('http');
const { readFileSync } = require('fs');

// Get all files
const homePage = readFileSync('./index.html');


// Create Server
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>404 Page not founded</h1>');
        res.end();
    }

}).listen(5000);