const mongoose = require('mongoose');

const programmingLanguagesSchema = mongoose.Schema({
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

const ProgrammingLanguages = mongoose.model('programmingLanguages', programmingLanguagesSchema)

module.exports = ProgrammingLanguages