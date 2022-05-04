const mongoose = require('mongoose');

const FrameworkSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    variations: {
        type: Array,
        require: false
    }
})

const Framework = mongoose.model('framework', FrameworkSchema)

module.exports = Framework