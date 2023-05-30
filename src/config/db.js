const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

const connect = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.error(`DB connected`);
  } catch (error) {
    console.error(error, 'Error connecting DB');
    process.exit(1);
  }
};

module.exports = connect;
