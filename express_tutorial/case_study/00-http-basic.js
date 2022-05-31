const http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.method);    //      GET,  POST,  DELETE,  UPDATE
    console.log(req.url);       //      /about  /contact

    // res.writeHead(200, 'Ok Sir', { 'Content-Type': 'text/html'});
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Home Page Sir</h1>');
    res.end();
});



server.listen(5000, () => console.log(''));