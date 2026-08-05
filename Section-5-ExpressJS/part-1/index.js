const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.end('Homepage');
})

app.get('/contact-us', (req,res) => {
     
    res.end('You can contact me on my email');
})

app.get('/tweets', (req,res) => {
    res.end('Here are all the tweets');
})

app.post('/tweets', (req,res) => {
    res.status(201).end('Tweet created successfully!');
})

app.listen(8000, () => console.log('Server is running on http://localhost:8000'));