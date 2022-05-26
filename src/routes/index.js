const express = require('express');
const router = express.Router();
const carRouter = require('./cars.router');
router.use('/car', carRouter);

module.exports = router;