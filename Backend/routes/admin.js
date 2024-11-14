const express = require('express');
const router = express.Router();
const Elective = require('../models/Elective');

// Create elective
router.post('/create-elective', async (req, res) => {
  try {
    const elective = new Elective(req.body);
    await elective.save();
    res.send(elective);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all electives
router.get('/electives', async (req, res) => {
  try {
    const electives = await Elective.find();
    res.send(electives);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
