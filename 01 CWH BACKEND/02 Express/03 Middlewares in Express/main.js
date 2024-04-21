const express = require('express')
const blogs = require('./routes/blog')


const app = express()
const port = 3000
const fs = require('fs');

app.use(express.static("public"));
app.use('/blog', blogs)

// Middleware 1:
app.use((req, res, next) => {
    console.log(req.headers);
    req.gaurav = "i am Gaurav Sah";
    // fs.writeFileSync("logs.txt", `Data : ${Date.now()} is a ${req.method}`);
    fs.appendFileSync("logs.txt", `Data : ${Date.now()} is a ${req.method}\n`);
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("Hacked by middlware 1")
    next();
})

// Middleware 2:
app.use((req, res, next) => {
    console.log('m2');
    req.gaurav = "i am Sah";
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World! from expres ')
})

app.get('/about', (req, res) => {
    res.send('Hello about! from expres, ' + req.gaurav)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact! from expres, ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})