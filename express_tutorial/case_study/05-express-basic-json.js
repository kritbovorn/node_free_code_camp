const express = require('express');
const { products, people } = require('./data');

const app = express();
app.disable('etag');    // clear cache for statusCode(200) not (304)

app.get('/', (req, res) => {
    res.json({products, people});
})

app.listen(5000, () => {
    console.log('Server is listening on PORT: 5000...');
});