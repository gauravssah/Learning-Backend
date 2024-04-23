const express = require('express');
const mongoose = require('mongoose');
const Employee = require("./models/Employee.js");
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/myCompanyData');

app.set('view engine', 'ejs');

let namesArray = [
    "Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Oliver", "Sophia"
];

let languageArray = [
    "Python", "JavaScript", "Java", "C++", "Ruby", "Swift", "PHP", "Go", "Rust", "TypeScript"
];

let cityArray = [
    "New York", "Tokyo", "London", "Paris", "Los Angeles", "Moscow", "Berlin", "Sydney", "Toronto", "Seoul"
];

// Helper function to get a random element from an array
const getRandom = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

// Route to render the index view
app.get('/', (req, res) => {
    res.render('index');
});

// Route to generate random data
app.get('/generate', async (req, res) => {
    try {
        // Clear the Employee collection
        await Employee.deleteMany({});

        // Generate Random Data
        const numberOfEmployees = 10;
        const maxSalary = 1200000; // Adjusted maximum salary
        for (let index = 0; index < numberOfEmployees; index++) {
            await Employee.create({
                name: getRandom(namesArray),
                salary: Math.floor(Math.random() * (maxSalary - 400000)) + 400000,
                language: getRandom(languageArray),
                city: getRandom(cityArray),
                isMannager: Math.random() > 0.5 // Fixed typo
            });
        }
        res.redirect('/'); // Redirect to the index page after generating data
    } catch (error) {
        console.error('Error generating data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
