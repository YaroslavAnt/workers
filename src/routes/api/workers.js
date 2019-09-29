
const express = require('express');
const router = express.Router();

// Load Worker model
const Worker = require('../../models/Worker');

router.get('/test', (req, res) => res.send('worker route testing!'));

router.get('/', (req, res) => {
  Worker.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Workers found' }));
});

router.get('/:id', (req, res) => {
  Worker.findById(req.params.id)
    .then(worker => res.json(worker))
    .catch(err => res.status(404).json({ nobookfound: 'No Worker found' }));
});

router.post('/', (req, res) => {
  Worker.create(req.body)
    .then(worker => res.json({ msg: 'Added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this worker' }));
});

router.put('/:id', (req, res) => {
  Worker.findByIdAndUpdate(req.params.id, req.body)
    .then(worker => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Worker.findByIdAndRemove(req.params.id, req.body)
    .then(worker => res.json({ mgs: 'Deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a worker' }));
});

module.exports = router;