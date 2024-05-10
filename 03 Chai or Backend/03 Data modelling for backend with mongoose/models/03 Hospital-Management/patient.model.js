const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagonsedwith: {
        type: String,
        rerquired: true
    },
    address: {
        type: String,
        rerquired: true
    },
    age: {
        type: Numberb,
        rerquired: true
    },
    bloodGroup: {
        type: String,
        rerquired: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "Others"],
        rerquired: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        rerquired: true,
        ref: "Hospital"
    },

}, { timestamps: true });


export const Patient = mongoose.model("Patient", patientSchema);