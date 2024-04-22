// CRUD Operations:
use("CrudDb");

// console.log(db);  // CrudDb

// Create: 
db.createCollection("courses");

// Insert:

db.courses.insertOne({
    name: "Gaurav web dev free course",
    price: 0,
    assignments: 12,
    projects: 45
});

db.courses.insertMany([
    {
        "name": "Priya's Intro to Programming",
        "price": 0,
        "assignments": 10,
        "projects": 30
    },
    {
        "name": "Rahul's HTML/CSS Basics",
        "price": 0,
        "assignments": 8,
        "projects": 25
    },
    {
        "name": "Sneha's JavaScript Fundamentals",
        "price": 0,
        "assignments": 15,
        "projects": 40
    },
    {
        "name": "Amit's Python Crash Course",
        "price": 0,
        "assignments": 12,
        "projects": 35
    },
    {
        "name": "Neha's Responsive Web Design",
        "price": 0,
        "assignments": 10,
        "projects": 30
    },
    {
        "name": "Deepak's Frontend Frameworks",
        "price": 0,
        "assignments": 20,
        "projects": 50
    },
    {
        "name": "Sachin's Backend Development Basics",
        "price": 0,
        "assignments": 15,
        "projects": 40
    },
    {
        "name": "Vivek's Database Management Essentials",
        "price": 0,
        "assignments": 12,
        "projects": 35
    },
    {
        "name": "Pooja's Full Stack Development Bootcamp",
        "price": 0,
        "assignments": 25,
        "projects": 60
    },
    {
        "name": "Harshita's DevOps Fundamentals",
        "price": 0,
        "assignments": 18,
        "projects": 50
    }
]
);


// Read-- > More...

let a = db.courses.find({ price: 0 });
console.log("Total Data: ", a.count());
console.log(a);
console.log("Array Formate: ")
console.log(a.toArray());

// Read-- > One

let b = db.courses.findOne({ price: 0 });
console.log(b);

// Update: 

db.courses.updateOne({ price: 0 }, { $set: { price: 100 } });

db.courses.updateMany({ price: 0 }, { $set: { price: 1000 } });

// Delete: 

// db.courses.deleteOne({ price: 1000 });
db.courses.deleteMany({ price: 1000 });


// Operations:
// https://www.mongodb.com/docs/manual/reference/operator/query/

// https://www.mongodb.com/docs/manual/reference/operator/