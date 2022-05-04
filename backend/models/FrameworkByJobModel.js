const mongoose = require('mongoose');

const FrameworkByJobSchema = mongoose.Schema({
    framework: {
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

const FrameworkByJob = mongoose.model('frameworkByJob', FrameworkByJobSchema)

module.exports = FrameworkByJob