const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const CalcSchema = new Schema({
  num: String,
  x: String,
  date: {
    type: String,
    default: Date.now()
  }
});

//Model
const CalcModel = mongoose.model('Calc', CalcSchema);

module.exports = CalcModel;