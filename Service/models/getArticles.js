const mongoose = require('mongoose');

const articleScheme = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Article', articleScheme);