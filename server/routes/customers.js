const express = require('express');

const { getCustomers } = require('../controllers/customer');

const router = express.Router();

router.route('/').get(getCustomers);

module.exports = router;
