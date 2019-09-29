const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
  },
  contacts: {
    type: String,
  },
  published_date: {
    type: Date,
  },
  salary: {
    type: String
  },
  position: {
    type: String,
  }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);