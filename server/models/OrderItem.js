const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Please add id'],
  },
  order_id: {
    type: String,
    trim: true,
    required: [true, 'Please add order name'],
  },
  price_per_unit: {
    type: String,
  },
  quantity: {
    type: String,
  },
  product: {
    type: String,
  },
});

module.exports = mongoose.model('OrderItem', ItemSchema);
