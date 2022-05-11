const mongoose = require('mongoose');

const CloudPlatformSchema = mongoose.Schema({
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

const CloudPlatform = mongoose.model('CloudPlatform', CloudPlatformSchema)

module.exports = CloudPlatform