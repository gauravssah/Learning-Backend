const mongoose = require('mongoose');
const Joi = require('joi');


mongoose.connect("mongodb://127.0.0.1:27017/joitestdb");

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLength: 3,
    },
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100,
    },
    contact: {
        type: Number,
        required: true,
        min: 1000000000,
        max: 9999999999,
    },
    email: {
        type: String,
        required: true,
        minLength: 3
    },

});


// ---- These are with joi validation ----

function validateModel(data) {

    let schema = Joi.object({
        username: Joi.string().required().min(3),
        name: Joi.string().required().min(3),
        age: Joi.number().required().min(18).max(100),
        contact: Joi.number().required().min(1000000000).max(9999999999),
        email: Joi.string().required().min(3).email(),
    })

    let { error } = schema.validate(data);
    return error;

    // let resolveans = schema.validate(data);
    // return resolveans;
    // console.log(resolveans.error?.message);

};

let userModel = mongoose.model('User', userSchema);

module.exports = { validateModel, userModel };

