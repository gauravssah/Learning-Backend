const mongoose = require('mongoose');
const debuglog = require('debug')('development:mongooseconfig');

mongoose.connect("mongodb://127.0.0.1:27017/testingdb");

const db = mongoose.connection;

db.on("error", function (error) {
    debuglog(error);
});

db.on("open", function () {
    debuglog("database connected");
});

module.exports = db;
