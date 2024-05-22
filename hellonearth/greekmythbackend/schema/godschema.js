const mongoose = require('mongoose')
const godSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    shortdetails: {
        type: String,
        required: true,
    },

    details: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('gods',godSchema)