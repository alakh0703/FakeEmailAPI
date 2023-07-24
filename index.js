const express = require('express');
const fakemails = require('./data/fakemails.js');
const PORT = 3000;

const app = express();

// allowing Access-Control-Allow-Origin for all origins
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/emails', (req, res) => {
    console.log("request received");
    res.send(fakemails);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    }
);
