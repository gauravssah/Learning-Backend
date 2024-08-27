const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    try {
        res.send("Home Page");
    }
    catch (err) {
        next(err)
    }
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

// Error Handling
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(3000);

