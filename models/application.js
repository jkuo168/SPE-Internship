const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
  netid: {
    type: String
  },
  college: {
    type: String
  },
  class: {
    type: Number
  },
  first: {
    type: String
  },
  last: {
    type: String
  },
  draw: {
    type: Array
  },
  group: {
    type: [String]
  },
  meal: {
    type: String
  },
  time: {
    type: String
  }
});

const Application = mongoose.model('Application', ApplicationSchema, 'post');
module.exports = Application;
