const express = require('express');

const { getOrders, searchOrder } = require('../controllers/orders');

const router = express.Router();

router.route('/').get(getOrders);
router.route('/search').get(searchOrder);

module.exports = router;
