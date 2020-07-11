const Item = require('../models/OrderItem');

exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.aggregate([
      {
        $group: {
          _id: null,
          amount: {
            $sum: {
              $multiply: ['$price_per_unit', '$quantity'],
            },
          },
        },
      },
    ]);

    res.status(200).json({ success: true, data: items });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
