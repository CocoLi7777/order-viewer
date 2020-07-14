const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('../database/db');
const cors = require('cors');
const path = require('path');

//dotenv.config({ path: './config/config.env' });
require('dotenv').config();

connectDB();

const orders = require('./routes/orders');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());

// Mount routers
app.use('/api/v1/orders', orders);

//set static folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
