const express = require('express');

const { getCompanies } = require('../controllers/company');

const router = express.Router();

router.route('/').get(getCompanies);

module.exports = router;
