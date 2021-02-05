require('dotenv').config
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const messages = [''];

app.get('/messages/:symbol', (req, res) => {
    res.send(messages);
});

app.listen(port, () => {
    console.log('listening');
});