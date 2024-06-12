const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Rotas para os carros
router.post('/', carController.createCar);
router.get('/', carController.getCars);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;
