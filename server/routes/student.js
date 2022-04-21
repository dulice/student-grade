const express = require('express');
const router = express.Router();
const { ShowStudent, CreateStudent, DeleteStudent } = require('../controllers/student');

router.get('/', ShowStudent);
router.post('/', CreateStudent);
router.delete('/:id', DeleteStudent);

module.exports = router;