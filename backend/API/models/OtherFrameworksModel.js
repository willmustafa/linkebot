const mongoose = require('mongoose');

const OtherFrameworkSchema = mongoose.Schema({
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

const OtherFrameworks = mongoose.model('OtherFramework', OtherFrameworkSchema)

module.exports = OtherFrameworks