const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Gaurav!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})


/*
app.get('/blog/intro-to-js', (req, res) => {
    // login to fetch intro to javascript
    res.send('Hello javascript!')
})

app.get('/blog/intro-to-python', (req, res) => {
    // login to fetch intro to python
    res.send('Hello python!')
})

app.get('/blog/intro-to-java', (req, res) => {
    // login to fetch intro to java
    res.send('Hello java!')
})
*/

// now its time to use variabel (slug) for each end points.

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    console.log(req.params); // { slug: 'donkey' } ||  ---> because - (http://127.0.0.1:3000/blog/donkey)
    console.log(req.query); // { mode: 'dark', region: 'in' } || ---> because - (/blog/donkey?mode=dark&region=in)
    // console.log(req)
    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/:slug/:second', (req, res) => {
//     // logic to fetch {slug} from the db
//     res.send(`hello ${req.params.slug} and ${req.params.second}`);
// })


// ----------------------------------->

app.use(express.static('public'));  // put the same name as folder name and put all the file that you want to give acces to the end user, publically.

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})