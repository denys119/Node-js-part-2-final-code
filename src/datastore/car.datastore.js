const Car = require('../models/car.model');

const carDatastore = {
  getAll: async () => {
    const data = await Car.find();
    return data;
  },
  create: async (payload) => {
    const car = await Car.create(payload);
    return car;
  },
  getById: async (id) => {
    const car = await Car.findById(id);
    return car;
  },
  update: async (id, payload) => {
    const car = await Car.findByIdAndUpdate(id, { $set: payload }, { new: true });
    return car;
  },
  deleteCar: async (id) => {
    const car = await Car.findByIdAndDelete(id);
    return car;
  }
}

module.exports = carDatastore;