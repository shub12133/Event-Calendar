const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DateSchema = new Schema({
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
});

module.exports = tempDate = mongoose.model('userDate', DateSchema);