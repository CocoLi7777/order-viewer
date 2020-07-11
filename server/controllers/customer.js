const Customer = require('../models/Customer');
const Customer_company = require('../models/Customer_company');

exports.getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.aggregate([
      {
        $lookup: {
          from: 'customer_companies',
          localField: 'company_id',
          foreignField: 'company_id',
          as: 'company',
        },
      },
    ]);

    res.status(200).json({ customer: customers });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
