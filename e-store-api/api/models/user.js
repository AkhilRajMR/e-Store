'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  roles: {
    type: [{
      type: String,
      enum: ['admin', 'user']
    }],
    default: ['user']
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Users', UserSchema);