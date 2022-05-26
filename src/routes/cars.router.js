const express = require('express');
const carRouter = express.Router();
const carController = require('../controllers/cars.controller');
const checkApiKey = require('../middlewares/checkapi.middleware');

// GET - is a way for you to grab data from a data source
carRouter.route('/get-all').get(carController.getAllCars);
carRouter.route('/:id').get(carController.getById);

// POST - requests that a web server accept the data enclosed in the body of the request message, most likely for storing it
carRouter.route('/create').post(checkApiKey, carController.addCar);

// PUT - we use this method to update an existing data source
carRouter.put('/update', carController.updateCar);

// DELETE - is used to delete a resource from the server
carRouter.delete('/delete', carController.deleteCar);
module.exports = carRouter;