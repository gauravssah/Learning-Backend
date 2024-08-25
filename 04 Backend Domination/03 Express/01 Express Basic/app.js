const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Gaurav Sah, how are you. I hove you are doing well.")
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/contact', (req, res) => {
    res.send("Contact Page")
})

app.get('*', (req, res) => {
    res.send("404 Page Not Found!")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


