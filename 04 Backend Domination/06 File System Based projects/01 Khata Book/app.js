const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    // Fetch and display all files from the 'files' directory
    fs.readdir("./files", (err, files) => {
        if (err) return res.send("Something went wrong!");
        res.render("index", { files: files });
    });
});

app.get("/create", (req, res) => {
    // Render the form for creating new content
    res.render("create");
});

app.post("/create", (req, res) => {
    // Create a new file with current date
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const fn = `${day}-${month}-${year}.txt`;
    const text = req.body.text;

    // Write content to the file
    fs.writeFile(`./files/${fn}`, text, (err) => {
        if (err) return res.send("Something went wrong!");

        // After writing the file, read the list of files again
        fs.readdir("./files", (err, files) => {
            if (err) return res.send("Something went wrong!");
            res.render("index", { files: files });  // Pass files to index.ejs
        });
    });
});

app.get("/view/:file", (req, res) => {
    const file = req.params.file;
    fs.readFile(`./files/${file}`, "utf-8", (err, data) => {
        if (err) return res.send("Something went wrong!");
        res.render("view", { file: data });
    });
});

app.get("/edit/:file", (req, res) => {
    const file = req.params.file;
    fs.readFile(`./files/${file}`, "utf-8", (err, data) => {
        if (err) return res.send("Something went wrong!");
        res.render("edit", { file, data });
    });
});

app.post("/update/:file", (req, res) => {
    const file = req.params.file;
    fs.writeFile(`./files/${file}`, req.body.text, (err) => {
        if (err) return res.send("Something went wrong!");
        res.redirect("/");
    });
});

app.get("/delete/:file", (req, res) => {
    const file = req.params.file;
    fs.unlink(`./files/${file}`, (err) => {
        if (err) return res.send("Something went wrong!");
        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
