const express = require('express');
const { products } = require('./data')
const path = require('path');

const app = express();

// Static folder : public
app.use(express.static('./public'));

// Home Page : was called from static folder ::::  express.static()
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
});

// All products::: json
app.get('/api/products', (req, res) => {

    // ### Method 1
    // const allProducts = products.map((product) => {
    //     const {id, name, image} = product;
    //     return {id, name, image};
    // });
    // res.json(allProducts);

    // ### Method 2
    let allProducts = [...products];
    res.json(allProducts);

});

// Selected Product : params
app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const selectedProduct = products.find((product) => product.id === Number(productID));

    if (!selectedProduct) {
       return res.status(404).sendFile(path.resolve('./public/404.html'));
    }
    res.json(selectedProduct);
});

// Query
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);

    const { search, limit } = req.query;    // กรณีส่ง Parameter ไปด้วย :  search  ,  limit
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);         // กรองตัวอักษรที่เริ่มต้น :  ต้อง return
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    // เช็คว่า ใน Array  มีค่าน้อยกว่า 1
    if (sortedProducts.length < 1) {
        return res.status(404).sendFile(path.resolve('./public/404.html'));     // ต้อง return
    }

    res.status(200).json(sortedProducts);

});

// Nested Params
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send(req.params);
})


app.listen(5000, () => {
    console.log('Server is listening on PORT: 5000 .....');
});