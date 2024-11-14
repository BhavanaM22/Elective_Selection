// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/elective_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import routes
const studentRoutes = require('./routes/student');
const adminRoutes = require('./routes/admin');

// Use routes
app.use('/student', studentRoutes);
app.use('/admin', adminRoutes);

// Define port
const port = 3000;

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

