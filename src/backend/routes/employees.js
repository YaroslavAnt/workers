
const express = require('express');
const router = express.Router();

const Employee = require('../models/Employee');

router.get('/test', (req, res) => res.send('employee route testing!'));

router.get('/', (req, res) => {
  Employee.find()
    .then(employees => res.json({ employees }))
    .catch(err => res.status(404).json({ noemployeesfound: 'No Employees found' }));
});

router.post('/', (req, res) => {
  console.log(req.body)
  Employee.create(req.body)
    .then(employee => res.json({ msg: 'Added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this employee' }));
});

router.put('/:id', (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then(employee => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Employee.findByIdAndRemove(req.params.id, req.body)
    .then(employee => res.json({ msg: 'Deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a employee' }));
});

module.exports = router;