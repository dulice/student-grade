const StudentData = require('../models/student')
const ShowStudent = async (req, res) => {
    try {
        const students = await StudentData.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}

const CreateStudent = async (req, res) => {
    const student = req.body;
    const newStudent = new StudentData(student);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}

const DeleteStudent = async (req, res) => {
    const id = req.params.id;
    try{
        await StudentData.findByIdAndRemove(id).exec();
        res.send('Delete Successfully');
    }catch (err){
        console.log(err.message);
    }
}

module.exports = { ShowStudent, CreateStudent, DeleteStudent };