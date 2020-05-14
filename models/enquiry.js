const mongoose = require('mongoose')

const enqSchema = new mongoose.Schema({
    enquiryNumber: { type: Number, default: 1 },
    dseName: String,
    prospectName: String,
    address: String,
    mobileNumber: String,
    modelName: String,
    fuelType: { 
        type: String, 
        enum: ['Petrol', 'Diesel']
    },
    variantName: { 
        type: String, 
        enum: ['Sigma', 'Delta', 'Zeta', 'Alpha'] 
    },
    enquiryStatus: { 
        type: String, 
        enum: ['Cold', 'Warm', 'Hot', 'Lost', 
            'Order', 'Invoiced', 'Postponed'] 
    },
    source: String,
    buyerType: {
        type: String,
        enum: ['First Time', 'Additional', 'Replacement']
    },
    lostReason: String,
    testDrive: { status: Boolean, date: Date },
    followUp: [{
        date: Date,
        remarks: String,
        nextDate: Date
    }],
}, {
    timestamps: true
})

const Enquiry = mongoose.model('Enquiry', enqSchema)
module.exports = Enquiry