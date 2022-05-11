const mongoose = require('mongoose');

const ToolSchema = mongoose.Schema({
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

const Tools = mongoose.model('Tool', ToolSchema)

module.exports = Tools