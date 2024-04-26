const express = require('express')
const app = express()

// Setting up a basic Express application.
// Routing.
// app.get(route, requestHandler);
app.get('/', function (req, res) {
    res.send('Hello Gaurav.')
});

app.get("/profile", (req, res) => {
    res.send("Welcome to my profile.")
});

app.listen(3000);
