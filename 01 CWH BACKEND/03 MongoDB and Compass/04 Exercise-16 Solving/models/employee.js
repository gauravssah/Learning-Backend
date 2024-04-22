import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true, default: "Hay i am default value" },
    salary: Number,
    language: String,
    city: String,
    isMannager: Boolean
});

const Employee = mongoose.model('employee', employeeSchema);
export default Employee;
