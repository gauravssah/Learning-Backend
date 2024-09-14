const express = require('express');
const app = express();
const { validateModel, userModel } = require('./models/user-model');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello Gaurav!');
});

app.post("/create", async (req, res) => {
    let { name, username, age, contact, email } = req.body;

    let error = validateModel({ name, username, age, contact, email });
    if (error) return res.status(500).send(error?.message);
    res.send('Everything is fine!');

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

