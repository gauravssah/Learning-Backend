
// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
        "name": "JavaScript2.0.1.1",
        "Price": "15000",
        "Instructor": "Gaurav Sah"
    },
    {
        "name": "Python3.1.0",
        "Price": "18000",
        "Instructor": "Priya Sharma"
    },
    {
        "name": "Java8.2.5",
        "Price": "20000",
        "Instructor": "Rahul Gupta"
    },
    {
        "name": "C++14.5.3",
        "Price": "17000",
        "Instructor": "Amit Patel"
    },
    {
        "name": "HTML5.2.0",
        "Price": "12000",
        "Instructor": "Neha Singh"
    },
    {
        "name": "CSS3.3.1",
        "Price": "13000",
        "Instructor": "Deepak Kumar"
    },
    {
        "name": "ReactJS1.6.7",
        "Price": "22000",
        "Instructor": "Sneha Verma"
    },
    {
        "name": "Angular9.0.2",
        "Price": "25000",
        "Instructor": "Ankit Jain"
    },
    {
        "name": "Node.js5.8.3",
        "Price": "20000",
        "Instructor": "Rajesh Sharma"
    },
    {
        "name": "MongoDB4.2.1",
        "Price": "23000",
        "Instructor": "Sachin Gupta"
    },
    {
        "name": "SQL Server2019",
        "Price": "28000",
        "Instructor": "Vivek Singh"
    },
    {
        "name": "Django3.2.0",
        "Price": "21000",
        "Instructor": "Pooja Verma"
    },
    {
        "name": "Ruby on Rails6.0.3",
        "Price": "24000",
        "Instructor": "Harshita Gupta"
    },
    {
        "name": "Vue.js2.6.12",
        "Price": "19000",
        "Instructor": "Akash Patel"
    },
    {
        "name": "Swift5.3.2",
        "Price": "26000",
        "Instructor": "Tanvi Sharma"
    },
    {
        "name": "Kotlin1.4.30",
        "Price": "27000",
        "Instructor": "Amit Singh"
    },
    {
        "name": "TensorFlow2.4.1",
        "Price": "30000",
        "Instructor": "Rishi Verma"
    },
    {
        "name": "PyTorch1.7.1",
        "Price": "28000",
        "Instructor": "Sneha Sharma"
    },
    {
        "name": "Flutter2.0.4",
        "Price": "29000",
        "Instructor": "Rahul Verma"
    },
    {
        "name": "Spring Boot2.4.3",
        "Price": "26000",
        "Instructor": "Rohit Kumar"
    },
    {
        "name": "Ruby2.7.2",
        "Price": "22000",
        "Instructor": "Riya Singh"
    }
]
);

// Print a message to the output window.
console.log(`Done inserting Data`);


