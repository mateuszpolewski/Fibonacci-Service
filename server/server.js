const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv').config({ path: '../.env' });
const cors = require('cors');
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json();

const app = express();
const PORT = 8080;

const db = process.env.DB_CONNECT;

const routes = require('./routes/route');

app.use(cors());
app.options('*', cors());
app.use(jsonParser);

const connectDB = async () => {
  let attempts = 10;
  while (attempts) {
    try {
      await mongoose.connect(db);
      console.log('MongoDB connected...');
      // break out of loop once conncected
      break;
    } catch (err) {
      console.log("Error: ", err.message);
      attempts -= 1;
      console.log(`connection attempts left: ${attempts}`);
      // wait for 10 seconds before retrying
      await new Promise(res => setTimeout(res, 10000));
    }
  }
};

connectDB();

module.exports = { connectDB };
app.use('', routes);
app.listen(PORT, console.log(`Server is starting at ${PORT}`));