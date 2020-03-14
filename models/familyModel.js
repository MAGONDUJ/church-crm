const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Schema
const FamilySchema = new Schema({
  familyMember: {
    type: String
  },
  familyMemberNo: {
    type: String
  },
  familyMemberPhone: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = family = mongoose.model("family", FamilySchema);
