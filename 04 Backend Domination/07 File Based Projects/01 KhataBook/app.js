const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const { constants } = require('buffer');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// render all hisaabs
app.get('/', (req, res) => {
    fs.readdir('./hisaab', (err, files) => {
        if (err) return res.status(500).send("Error reading directory");
        res.render('index', { files: files });
    });
});

// create a new hisaab
app.get('/create', (req, res) => {
    res.render("create");
});
app.get('/hisaab/create', (req, res) => {
    res.render("create");
});

app.post('/createhisaab', (req, res) => {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
    const { title, content } = req.body;

    if (!title || !content) return res.status(400).send("All fields are required");

    fs.writeFile(`./hisaab/${title}, ${date}.txt`, content, (err) => {
        if (err) return res.status(500).send("Failed to create file");
        res.redirect('/');
    });
});

// edit a hisaab
app.get('/edit/:file', (req, res) => {
    const fileName = req.params.file;
    fs.readFile(`./hisaab/${fileName}`, 'utf8', (err, data) => {
        if (err) return res.status(500).send("Error reading the file");
        // Render the edit view and pass the file name and content to it
        res.render('edit', { fileName: fileName, content: data });
    });
});


// delete a hisaab
app.get('/delete/:file', (req, res) => {
    const fileName = req.params.file;
    fs.unlink(`./hisaab/${fileName}`, (err) => {
        if (err) return res.status(500).send("Error deleting the file");
        res.redirect('/');
    });
});

// view a hisaab

app.get('/hisaab/:fileName', (req, res) => {
    // res.render('hisaab', { fileName: req.params.fileName, content: '' });

    fs.readFile(`./hisaab/${req.params.fileName}`, 'utf8', (err, data) => {
        if (err) return res.status(500).send("Error reading the file");
        res.render('hisaab', { fileName: req.params.fileName, content: data });
    });

});

// update a hisaab

app.post('/update/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const { content, title } = req.body;  // Now 'content' will have the correct value

    if (!content) {
        return res.status(400).send("Content is required");
    }

    fs.writeFile(`./hisaab/${fileName}`, content, (err) => {
        if (err) return res.status(500).send("Error updating the file");
        res.redirect('/');
    });
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

