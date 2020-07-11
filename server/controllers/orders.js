const Order = require('../models/Order');
const Customer = require('../models/Customer');
const { query } = require('express');

exports.getOrders = async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 1;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Order.countDocuments();
    console.log(total);

    // march
    const match = req.query.match || '';
    console.log(req.query.match);

    const orders = await Order.aggregate([
      {
        $lookup: {
          from: 'customers',
          localField: 'customer_id',
          foreignField: 'user_id',
          as: 'customer',
        },
      },
      {
        $lookup: {
          from: 'customer_companies',
          localField: 'customer.company_id',
          foreignField: 'company_id',
          as: 'company',
        },
      },
      {
        $lookup: {
          from: 'order_items',
          localField: 'id',
          foreignField: 'order_id',
          as: 'item',
        },
      },
      {
        $lookup: {
          from: 'deliveries',
          localField: 'item.id',
          foreignField: 'order_item_id',
          as: 'delivery',
        },
      },
      {
        $skip: startIndex,
      },
      {
        $limit: limit,
      },
      /*{
        $match: { order_name: match },
      },*/
    ]);

    //Pagination result
    const pagination = {};
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    }
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }

    res.status(200).json({ count: total, pagination, orders: orders });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
