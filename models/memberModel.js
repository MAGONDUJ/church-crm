const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Schema
const MemberSchema = new Schema({
  memberNo: {
    type: String
  },
  title: {
    type: String
  },
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  surName: {
    type: String
  },
  gender: {
    type: String
  },
  dob: {
    type: String
  },
  maritalStatus: {
    type: String
  },
  maritalStatusDesc: {
    type: String
  },
  phoneOne: {
    type: String
  },
  phoneTwo: {
    type: String
  },
  email: {
    type: String
  },
  box: {
    type: String
  },
  city: {
    type: String
  },
  code: {
    type: String
  },
  residenceCity: {
    type: String
  },
  geographicalArea: {
    type: String
  },
  estate: {
    type: String
  },
  road: {
    type: String
  },
  houseNo: {
    type: String
  },
  joinYear: {
    type: String
  },
  familyMember: {
    type: String
  },
  familyMemberNo: {
    type: String
  },
  familyMemberRelationship: {
    type: String
  },
  familyMemberPhone: {
    type: String
  },
  baptized: {
    type: String
  },
  baptizeDate: {
    type: String
  },
  baptizePlace: {
    type: String
  },
  baptizeNature: {
    type: String
  },
  homeChurch: {
    type: String
  },
  churchCounty: {
    type: String
  },
  churchLocation: {
    type: String
  },
  churchLandMark: {
    type: String
  },
  churchPastor: {
    type: String
  },
  churchPastorContact: {
    type: String
  },
  professionalData: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = member = mongoose.model("member", MemberSchema);
