const Customer_company = require('../models/Customer_company');

exports.getCompanies = async (req, res, next) => {
  try {
    const companies = await Customer_company.find();

    res.status(200).json({ company: companies });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
