const mongoose = require("mongoose");
//const dates = require('./Date');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  userDates: [
    {
      title: {
        type: String,
        required: true
      },
      start: {
        type: Date,
        default: Date.now(),
        required: true
      },
      end: {
        type: Date
      },
      allDay: {
        type: Boolean,
        default: false,
        required: true
      }
    }
  ]
});

module.exports = User = mongoose.model("User", UserSchema);
