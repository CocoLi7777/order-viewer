const Delivery = require('../models/Delivery');

exports.getDeliveries = async (req, res, next) => {
  try {
    const deliveries = await Delivery.find();

    res.status(200).json({ success: true, data: deliveries });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
