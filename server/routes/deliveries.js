const express = require('express');

const { getDeliveries } = require('../controllers/delivery');

const router = express.Router();

router.route('/').get(getDeliveries);

module.exports = router;
