const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Lets learn dynamic routing');
});

app.get("/profile/:username", (req, res) => {
    res.send(`Welcome ${req.params.username}`);
});

app.get("/author/:username/:page", (req, res) => {
    res.send(`Welcome to ${req.params.username}, page no ${req.params.page}`);
});

app.listen(3000);


