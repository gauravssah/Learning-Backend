const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Hello Gaurav, Welcom to my Morgan!');
});

app.listen(3000);