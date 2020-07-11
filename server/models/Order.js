const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Please add order id'],
  },
  createdAt: {
    type: Date,
  },
  order_name: {
    type: String,
    trim: true,
    required: [true, 'Please add order name'],
  },
  customer_id: {
    type: String,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
