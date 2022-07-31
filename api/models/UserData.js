const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
    friends: {
        type: Array,
        required: true
    },
    sentRequests: {
        type: Array,
        required: true
    },
    receivedRequests: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('UserData', UserDataSchema);