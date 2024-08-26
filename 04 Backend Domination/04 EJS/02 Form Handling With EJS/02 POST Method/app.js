const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index");
});

app.post("/formsubmit", (req, res) => {
    res.send("Form Submitted Successfully");
    console.log(req.body);
});

app.listen(3000);


