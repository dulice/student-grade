const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    regNo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    }
},{timestamps: true});

const StudentData = mongoose.model('student', studentSchema);
module.exports = StudentData;