const mongoose = require('mongoose');

const WebFrameworkSchema = mongoose.Schema({
    language: {
        type: String,
        require: true
    },
    variations: {
        type: Array,
        require: false
    }
})

const WebFramework = mongoose.model('webframework', WebFrameworkSchema)

module.exports = WebFramework