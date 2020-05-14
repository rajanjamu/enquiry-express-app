const mongoose = require('mongoose')

const enqSchema = new mongoose.Schema({
    prospectname: String,
    mobileNumber: String
}, {
    timestamps: true
})

const Enquiry = mongoose.model('Enquiry', enqSchema)
module.exports = Enquiry