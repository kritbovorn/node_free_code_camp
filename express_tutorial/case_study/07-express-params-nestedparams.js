const express = require('express');
const { products } = require('./data');
const path = require('path');

const app = express();


// Cached
// app.disable('etad');

// Home Page
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a><p><a href="/api/products/2">Product Id</a></p>');
});

// All Products
app.get('/api/products', (req, res) => {
    const newProduct = products.map((p) => {
        const {id, name , image} = p;
        return {id, name, image};
    });
    res.json(newProduct);
});

// Selected Product
app.get('/api/products/:productID', (req, res) => {
    // console.log(req.params); // Log ค่า id  ออกมาว่า users เลือก
    const {productID} = req.params;     // สร้างตัวแปร มารับค่า จาก :  req.params 
    const selectedProduct = products.find((p) => p.id === Number(productID));

    if (!selectedProduct) {
        return res.status(404).sendFile(path.resolve('./public/404.html')); // Call html : 404.html page
        // return res.status(404).send('Product does not exists: Oops!!!!!');
    }
    
    return res.json(selectedProduct);
});

// Complex : Params
app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
    console.log(req.params);
    res.send(req.params);
})


app.listen(5000, () => {
    console.log('Server is listening on PORT: 5000.....');
})