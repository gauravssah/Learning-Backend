const express = require('express');
const app = express();

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index")
})

// By default method is GET in form
app.get("/check", (req, res) => {
    res.send("Form Submitted..")
    console.log(req.query)


    // ------------------
    // let { name, gmail, pass } = req.query
    // res.send(`Your Name is ${name} and your Gmail is ${gmail} and your Password is ${pass}`)
})

app.listen(3000)


