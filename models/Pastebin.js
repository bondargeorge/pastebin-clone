const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema used for saving and retrieving pastebins
const pastebinSchema = new Schema ({
    pastebinText: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Pastebin', pastebinSchema);