const carDatastore = require('../datastore/car.datastore');

const getAllCars = async (req, res) => {
  const cars = await carDatastore.getAll();
  if (!cars) return res.status(404).json({ message: 'Cars not found' });
  res.status(200).json(cars);
}

const getById = async (req, res) => {
  const id = req.params.id;
  const car = await carDatastore.getById(id);
  if (!car) return res.status(404).json({ message: 'No car found' });
  res.status(200).json(car);
}

const addCar = async (req, res) => {
  const car = await carDatastore.create(req.body);
  if (!car) return res.status(404).json({ message: 'Car was not created' });
  return res.status(200).json(car);
}

const updateCar = async (req, res) => {
  const carId = req.query.carId;
  const data = req.body;
  const car = await carDatastore.update(carId, data);
  if (!car) return res.status(404).json({ message: 'Car was not updated' });
  res.status(200).json(car);
}

const deleteCar = async (req, res) => {
  const carId = req.query.carId;
  const car = await carDatastore.deleteCar(carId);
  if (!car) return res.status(404).json({ message: 'Car was not deleted' });
  res.status(200).json(car);
}

module.exports = {
  getAllCars,
  getById,
  addCar,
  updateCar,
  deleteCar
}