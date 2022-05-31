const http = require('http');
const { readFileSync } = require('fs');

// Get all Files .html :  to show in webpage
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');
const aboutPage = readFileSync('./navbar-app/about.html');

const server = http.createServer((req, res) => {

    const url = req.url;    //      /about  /contact
    console.log(url);       //  Log  ค่าออกมาดูว่า มี ไฟล์ไหนบ้าง 
    //  Home Page
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(homePage);
        res.end();
    } 
    // Style CSS
    else if (url === '/styles.css') {
        res.setHeader('Content-Type', 'text/css');
        res.write(homeStyles);
        res.end();
    }
    // image/svg
    else if (url === '/logo.svg') {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.write(homeImage);
        res.end();
    }
    // Javascript
    else if (url === '/browser-app.js') {
        res.setHeader('Content-Type', 'text/javascript');
        res.write(homeLogic);
        res.end();
    }
    //  About Page
    else if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write(aboutPage);
        res.end();
    }
    //  404 Page
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("");
        res.end();
    }

});



server.listen(5000, () => console.log(''));