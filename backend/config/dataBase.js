const mongoose = require('mongoose');

connectDatabase = () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log('Connected with host');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDatabase;
