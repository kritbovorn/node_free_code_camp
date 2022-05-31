const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;    //      /about  /contact
    //  Home Page
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    //  About Page
    else if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>About Me</h1>');
        res.end();
    }
    //  404 Page
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Page not Founded</h1>');
        res.end();
    }

});



server.listen(5000, () => console.log(''));