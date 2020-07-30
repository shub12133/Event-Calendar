const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

// Date Model
const tempDate = require('../../models/Date');

// @route   GET api/dates
// @desc    Get All Dates
// @access  Public
router.get('/', (req, res) => {
  tempDate
    .find()
    .sort({ date: -1 })
    .then((datee) => res.json(datee));
});

// @route   POST api/dates
// @desc    Create An Dates
// @access  Private
router.post('/', auth, (req, res) => {
  console.log('Ruter.post');
  const newtempDate = new tempDate({
    title: req.body.title,
    start: req.body.start,
  });

  newtempDate.save().then((Datee) => res.json(Datee));
});

// @route   DELETE api/dates/:id
// @desc    Delete A Date
// @access  Private
router.delete('/:id', auth, (req, res) => {
  tempDate
    .findById(req.params.id)
    .then((Datee) => Datee.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   UPDATE api/dates/:id
// @desc    Update A Date
// @access  Private
router.put('/:id', auth, (req, res) => {
  console.log('Ruter PUT');
  console.log(req);
  const newtempDate = {
    // Izmeniti za null
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
    allDay: req.body.allDay,
  };

  tempDate
    .findById(req.params.id)
    .then((Datee) =>
      Datee.updateOne(newtempDate).then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
