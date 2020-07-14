const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('../database/db');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

connectDB();

// Route files
const orders = require('./routes/orders');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());

// Mount routers
app.use('/api/v1/orders', orders);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
