const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

// Date Model
const tempDate = require('../../models/User');

router.post('/', auth, (req, res) => {
  tempDate.updateOne(
    { _id: req.user.id },
    { $push: { userDates: { title: req.body.title, start: req.body.start } } },
    (err, result) => {
      if (err) {
        res.status(404).json({ success: false });
      } else {
        res.json({ success: true });
      }
    }
  );
});

// @route   DELETE api/dates/:uid/:did
// @desc    Delete A Date
// @access  Private
router.delete('/:did', auth, (req, res) => {
  tempDate.updateOne(
    { _id: req.user.id },
    { $pull: { userDates: { _id: req.params.did } } },
    (err, result) => {
      if (err) {
        res.status(404).json({ success: false, err: err });
      } else {
        res.json({ success: true });
      }
    }
  );
});

// @route   GET api/dates
// @desc    Get All Dates
// @access  Public
router.get('/', auth, (req, res) => {
  tempDate
    .findById(req.user.id)
    .then((Date) => res.json(Date.userDates))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route   UPDATE api/dates/:id
// @desc    Update A Date
// @access  Private
router.put('/:did', auth, (req, res) => {
  let newtempDate;

  newtempDate = {
    'userDates.$.title': req.body.title,
    'userDates.$.start': req.body.start,
    'userDates.$.end': req.body.end,
    'userDates.$.allDay': false,
  };

  tempDate.updateOne(
    {
      _id: req.user.id,
      'userDates._id': req.params.did,
    },
    { $set: newtempDate },
    (err, result) => {
      if (err) {
        res.status(404).json({ success: false, err: err });
      } else {
        res.json({ success: true });
      }
    }
  );
});

module.exports = router;
