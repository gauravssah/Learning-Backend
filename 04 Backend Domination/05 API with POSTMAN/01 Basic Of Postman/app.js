const express = require('express');
const app = express()

app.get("/check", (req, res) => {
    res.send("Hello, and welcome to API testing with postman")
});

app.post("/check", (req, res) => {
    res.send("Hello, and welcome to API testing with postman")
});

app.put("/check", (req, res) => {
    res.send("Hello, and welcome to API testing with postman")
});

app.patch("/check", (req, res) => {
    res.send("Hello, and welcome to API testing with postman")
});

app.listen(3000);