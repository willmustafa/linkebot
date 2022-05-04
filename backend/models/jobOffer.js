const mongoose = require('mongoose');

const jobOfferSchema = mongoose.Schema({
    company: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    LinkedinLink: {
        type: String,
        require: true
    },
    localizacao: {
        type: String,
        require: true
    },
    jobId: {
        type: Number,
        require: true
    },
    date: { type: Date, default: new Date().toLocaleDateString() }
})

const jobOffer = mongoose.model('jobOffer', jobOfferSchema)

module.exports = jobOffer