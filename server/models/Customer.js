const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Please add order id'],
  },
  login: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please add your password'],
  },
  name: {
    type: String,
  },
  company_id: {
    type: String,
    ref: 'CustomerCompany',
  },
  credit_cards: {
    type: Array,
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);
