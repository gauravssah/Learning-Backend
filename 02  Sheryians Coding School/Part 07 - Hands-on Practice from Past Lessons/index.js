const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        res.render("index", { files: files });
    })
});


app.post('/create', function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
        if (err) {
            console.error(err);
            res.status(500).send("Failed to create file.");
        } else {
            res.redirect("/");
        }
    });
});


app.get('/file/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, fileData) {
        if (err) {
            // Handle error, for example, send a 404 response
            res.status(404).send("File not found");
            return;
        }

        // Remove file extension from filename
        let filenameWithoutExtension = req.params.filename.replace(/\.[^/.]+$/, "");

        // Render the 'show' template with filenameWithoutExtension and fileData
        res.render('show', { filename: filenameWithoutExtension, fileData: fileData });
    });
});


app.get('/edit/:filename', function (req, res) {
    res.render('edit', { previousName: req.params.filename });
});

app.post('/edit', function (req, res) {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, (err) => {
        res.redirect("/");
    });
});

app.listen(3000);