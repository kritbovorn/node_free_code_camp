const express = require('express');
const { products } = require('./data');

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

// App products
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    });
    res.json(newProducts);
});

// Selected product BY ID
app.get('/api/products/1', (req, res) => {
    const selectedProduct = products.find((product) => product.id === 1);
    res.json(selectedProduct);
});

app.listen(5000, () => {
    console.log('Server is listening on PORT: 5000');
});