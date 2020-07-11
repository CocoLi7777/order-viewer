const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('../database/db');

dotenv.config({ path: './config/config.env' });

connectDB();

// Route files
const orders = require('./routes/orders');
const customers = require('./routes/customers');
const companies = require('./routes/companies');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/orders', orders);
app.use('/api/v1/customers', customers);
app.use('/api/v1/companies', companies);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
