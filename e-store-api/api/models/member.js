'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MemberSchema = new Schema({
  name: {
    type: String
  },
  membershipId: {
    type: String
  },
  age: {
    type: String
  },
  dob: {
    type: Date
  },
  mobileNumber: {
    type: String
  },
  homeNumber: {
    type: String
  },
  officeNumber: {
    type: String
  },
  address: {
    type: String
  },
  nameOfLocalBody: {
    type: String
  },
  ward: {
    type: String
  },
  houseNumber: {
    type: String
  },
  sanghName: {
    type: String
  },
  district: {
    type: String
  },
  taluk: {
    type: String
  },
  nameOfGuardian: {
    type: String
  },
  anualIncome: {
    type: String
  },
  occupation: {
    type: String
  },
  rationCardNumber: {
    type: String
  },
  rationCardType: {
    type: String
  },
  bloodGroup: {
    type: String
  },
  educationQualification: {
    type: String
  },
  religion: {
    type: String
  },
  cast: {
    type: String
  },
  reservationCategory: {
    type: String
  },
  residentialHousing: {
    type: String
  },
  drinkingWater: {
    type: String
  },
  toiletFacility: {
    type: String
  },
  electricityAvailability: {
    type: String
  },
//   roles: {
//     type: [{
//       type: String,
//       enum: ['admin', 'user']
//     }],
//     default: ['user']
//   },
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Members', MemberSchema);