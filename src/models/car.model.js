const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  color: { type: String, required: true, trim: true },
  isnew: { type: Boolean, required: true, default: false },
  fabricationDate: { type: Number, required: true }
}, {
  timestamps: true,
})

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

