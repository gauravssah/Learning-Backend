const mongoose = require('mongoose');
const debuglog = require('debug')('development:mongooseconfig');

mongoose.connect('mongodb://localhost:27017/testingdb');

const db = mongoose.connection;

db.on('error', (err) => {
    debuglog("Error connecting to database", err);
});

db.on('open', () => {
    debuglog("Connected to database");
});

module.exports = db;



