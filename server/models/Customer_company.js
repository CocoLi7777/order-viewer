const mongoose = require('mongoose');

const Customer_companySchema = new mongoose.Schema({
  company_id: {
    type: String,
    unique: true,
    required: [true, 'Please add order id'],
  },
  company_name: {
    type: String,
  },
});

module.exports = mongoose.model('Customer_company', Customer_companySchema);
