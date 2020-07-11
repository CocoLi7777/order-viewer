const mongoose = require('mongoose');

const mongodb = require('mongodb').MongoClient;
const csvtojson = require('csvtojson');

const dotenv = require('dotenv');

dotenv.config({ path: '../config/config.env' });

/*const Order = require('../config.env');
const OrderItem = require('./server/models/OrderItem');
const Delivery = require('./server/models/Delivery');
const Customer = require('./server/models/Customer');
const CustomerCompany = require('./server/models/Customer_companies');*/

const importData = async () => {
  csvtojson()
    .fromFile('./customers.csv')
    .then((csvData) => {
      mongodb.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
          if (err) throw err;

          client
            .db('OrderReview')
            .collection('customers')
            .insertMany(csvData, (err, res) => {
              if (err) throw err;

              console.log(`Inserted: ${res.insertedCount} rows`);
              client.close();
            });
        }
      );
    });

  csvtojson()
    .fromFile('./customer_companies.csv')
    .then((csvData) => {
      console.log(csvData);

      mongodb.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
          if (err) throw err;

          client
            .db('OrderReview')
            .collection('customer_companies')
            .insertMany(csvData, (err, res) => {
              if (err) throw err;

              console.log(`Inserted: ${res.insertedCount} rows`);
              client.close();
            });
        }
      );
    });

  csvtojson()
    .fromFile('./Orders.csv')
    .then((csvData) => {
      mongodb.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
          if (err) throw err;

          client
            .db('OrderReview')
            .collection('orders')
            .insertMany(csvData, (err, res) => {
              if (err) throw err;

              console.log(`Inserted: ${res.insertedCount} rows`);
              client.close();
            });
        }
      );
    });

  csvtojson()
    .fromFile('./deliveries.csv')
    .then((csvData) => {
      console.log(csvData);

      mongodb.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
          if (err) throw err;

          client
            .db('OrderReview')
            .collection('deliveries')
            .insertMany(csvData, (err, res) => {
              if (err) throw err;

              console.log(`Inserted: ${res.insertedCount} rows`);
              client.close();
            });
        }
      );
    });

  csvtojson()
    .fromFile('./order_items.csv')
    .then((csvData) => {
      console.log(csvData);

      mongodb.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
          if (err) throw err;

          client
            .db('OrderReview')
            .collection('order_items')
            .insertMany(csvData, (err, res) => {
              if (err) throw err;

              console.log(`Inserted: ${res.insertedCount} rows`);
              client.close();
            });
        }
      );
    });
};

// Delete data
const deleteData = async () => {
  try {
    await Order.deleteMany();
    await OrderItem.deleteMany();
    await Delivery.deleteMany();
    await CustomerCompany.deleteMany();
    await Customer.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
