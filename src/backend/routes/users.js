const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.get('/test', (req, res) => res.send('user route testing!'));

router.post('/login', (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  User.findOne({ email })
    .then(user => {
      const token = jwt.sign({ user });
      console.log(({ token }))
      return res.json({ msg: 'Logged in successfully', user, token })
    })
    .catch(err => res.status(400).json({ error: 'Unable to authenticate' }));
});

router.post('/signup', (req, res) => {
  console.log(req.body);
  console.log({ User })

  User.create(req.body)
    .then(user => res.json({ msg: 'Added successfully. Please login', user }))
    .catch(err => res.status(400).json({ error: 'Unable to add this user', err }));
});


module.exports = router;