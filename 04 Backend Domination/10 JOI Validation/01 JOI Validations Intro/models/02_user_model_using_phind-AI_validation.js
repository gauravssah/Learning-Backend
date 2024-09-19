const mongoose = require('mongoose');
const Joi = require('joi');


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/joitestdb");

// #########-------> Mongoose <-------#########
// ----> Define the schema using Mongoose <----

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username cannot exceed 30 characters'],
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [50, 'Name cannot exceed 50 characters'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [18, 'Minimum age is 18'],
        max: [120, 'Maximum age is 120']
    },
    contact: {
        type: String,
        required: [true, 'Contact number is required'],
        minlength: [10, 'Contact must be at least 10 digits long'],
        maxlength: [15, 'Contact cannot exceed 15 digits'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
        trim: true,
        lowercase: true
    }
});

// #########-------> JOI <-------#########
// ----> Define the schema using Joi <----

function validateModel(data) {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .messages({
                'string.empty': 'Username is required',
                'string.min': 'Username must be at least 3 characters long',
                'string.max': 'Username cannot exceed 30 characters'
            })
            .trim(),

        name: Joi.string()
            .min(2)
            .max(50)
            .required()
            .messages({
                'string.empty': 'Name is required',
                'string.min': 'Name must be at least 2 characters long',
                'string.max': 'Name cannot exceed 50 characters'
            })
            .trim(),

        age: Joi.number()
            .integer()
            .min(18)
            .max(120)
            .required()
            .messages({
                'number.base': 'Invalid age format',
                'number.min': 'Age must be at least 18 years old',
                'number.max': 'Age cannot exceed 120 years'
            }),

        contact: Joi.string()
            .min(10)
            .max(15)
            .required()
            .messages({
                'string.empty': 'Contact number is required',
                'string.min': 'Contact number must be at least 10 digits long',
                'string.max': 'Contact number cannot exceed 15 digits'
            })
            .trim(),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in', 'co'] } })
            .required()
            .lowercase()
            .messages({
                'string.email': "Only .com, .net, .in, .co domains are allowed in email",
                'string.empty': 'Email is required'
            })
            .trim()
    });

    let { error } = schema.validate(data);
    return error;
}



module.exports.userModel = mongoose.model('User', userSchema);
module.exports.validateModel = validateModel;


