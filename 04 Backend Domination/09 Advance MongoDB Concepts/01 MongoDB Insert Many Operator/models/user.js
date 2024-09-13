const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testingadvancedbcommands");

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    isMarried: { type: Boolean, required: true },
    isAdmin: { type: Boolean },
});

module.exports = mongoose.model("user", userSchema);
