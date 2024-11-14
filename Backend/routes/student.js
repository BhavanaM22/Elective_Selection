const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create student
router.post('/register', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Login student
router.post('/login', async (req, res) => {
  try {
    const student = await Student.findOne({ USN: req.body.USN, Password: req.body.Password });
    if (!student) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get student profile
router.get('/profile', async (req, res) => {
  try {
    const student = await Student.findById(req.student._id);
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
