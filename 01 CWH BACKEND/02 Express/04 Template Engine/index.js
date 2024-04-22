const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Campus";
    let searchText = "Search Now";
    let plach = "Type here..."
    let arr = ["Hey", 54, 65]
    // res.sendFile("templates/index.html", { root: __dirname });
    res.render("index", { siteName: siteName, searchText: searchText, placeholder: plach, arr });
})

app.get('/', (req, res) => {

    let blogTitle = "Campus why and when?";
    let BlogContent = "Its a very good brand";
    res.render("index", { blogTitles: blogTitle, BlogContents: BlogContent });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})