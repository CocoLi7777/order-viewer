const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Please add id'],
  },
  order_item_id: {
    type: String,
  },
  delivered_quantity: {
    type: String,
  },
});

DeliverySchema.virtual('price_per_unit', {
  ref: 'OrderItem',
  localField: 'order_item_id',
  foreignField: 'id',
});

module.exports = mongoose.model('Delivery', DeliverySchema);
