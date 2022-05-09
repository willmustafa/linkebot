const mongoose = require('mongoose');

const DatabaseSchema = mongoose.Schema({
    language: {
        type: String,
        require: true
    },
    variations: {
        type: String,
        require: false
    },
    jobId: {
        type: Number,
        require: true
    },
    date: { type: Date, default: new Date().toLocaleDateString() }
})

const Databases = mongoose.model('database', DatabaseSchema)

module.exports = Databases