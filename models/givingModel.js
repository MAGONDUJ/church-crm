const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Schema
const GivingSchema = new Schema({
    memberNumber: {
        type: String
    },
    paymentMode: {
        type: String
    },
    amount: {
        type: String
    },
    txRefNo: {
        type: String
    },
    txDate: {
        type: String
    },
    purpose: {
        type: String
    },
    otherPurpose: {
        type: String
    },
    nonMemberName: {
        type: String
    },
    nonMemberPhone: {
        type: String
    },
    nonMemberEmail: {
        type: String
    },
    postedBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = giving = mongoose.model("giving", GivingSchema);