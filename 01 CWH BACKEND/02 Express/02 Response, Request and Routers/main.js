const express = require('express');
const blogs = require('./routes/blog');
const shop = require('./routes/shop');


const app = express();
const port = 3000;


app.use(express.static("public"));
app.use('/blog', blogs);
app.use('/shop', shop);


app.get('/', (req, res) => {
    console.log("Hey its a get request!")
    res.send('Hello World! get req')
})

app.post('/', (req, res) => {
    console.log("Hey its a post request!")
    res.send('Hello World from post req!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request!")
    res.send('Hello World from put req!')
})

app.delete('/', (req, res) => {
    console.log("Hey its a delete request!")
    res.send('Hello World from delete req!')
})


app.get('/index', (req, res) => {
    console.log("This is from index . html console");
    // res.send("get request on index.html from (res.send) ");  // this will display only whatever writen inside int res.send(" ");
    res.sendFile("templates/index.html", { root: __dirname }); // This will render the html page on web.
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Gaurav sah", "Gaurav"] });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})