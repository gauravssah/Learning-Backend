import express from "express";
import mongoose from 'mongoose';
import employee from './models/employee.js';

const app = express();
const port = 3000;

await mongoose.connect("mongodb://localhost:27017/company");

let namesArray = [
    "Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Oliver", "Sophia"
];

let languageArray = [
    "Python", "JavaScript", "Java", "C++", "Ruby", "Swift", "PHP", "Go", "Rust", "TypeScript"
];

let cityArray = [
    "New York", "Tokyo", "London", "Paris", "Los Angeles", "Moscow", "Berlin", "Sydney", "Toronto", "Seoul"
];

let dataCount = 0; // Global variable to track the count of data entries

app.get('/', (req, res) => {

    const randomNum = Math.floor(Math.random() * 11);

    const newEmployee = new employee({
        name: namesArray[randomNum],
        salary: Math.floor(Math.random() * (800000 - 400000 + 1)) + 400000,
        language: languageArray[randomNum],
        city: cityArray[randomNum],
        isMannager: Math.random() < 0.5
    });

    newEmployee.save()
        .then(() => {
            dataCount++; // Increment the data count
            // Send the HTML with a button that triggers a page reload and displays the data count
            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Generate Data</title>
                </head>
                <body>
                    <h1>Data Generated Successfully : [ ${dataCount} ]</h1>
                    <button onclick="reloadPage()">Generate Data</button>
                    <script>
                        function reloadPage() {
                            location.reload();
                        }
                    </script>
                </body>
                </html>
            `);
        })
        .catch(error => {
            console.error('Error generating data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
