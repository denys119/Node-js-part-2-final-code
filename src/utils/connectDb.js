const CONFIG = require('../config/config');
const mongoose = require('mongoose');

const startDb = () => {
  mongoose.connect(CONFIG.DB_CON).then(() => {
    console.log('Db connection successful');
  }).catch(err => {
    console.log(err);
  })
}

module.exports = startDb;