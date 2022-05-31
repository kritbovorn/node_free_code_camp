const express = require('express');

const app = express();

// app.disable('etag'); //  Disable Cached

app.get('/', (req, res) => {
   
    res.status(200).send('Express Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('Express About Me Sir....')
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Oops: 404: resources not founded</h1>');
})



app.listen(5000, () => {
    console.log('Server is listening on Port : 5000...');
});


// app.get
// app.put
// app.post
// app.delete
// app.all
// app.use
// app.listen