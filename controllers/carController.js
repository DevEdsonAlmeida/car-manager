const { Car } = require('../models');

exports.createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json({ message: 'Adicionado com sucesso', car });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    if (cars.length === 0) {
      res.status(404).json({ message: 'Nenhum carro cadastrado' });
    } else {
      res.status(200).json(cars);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (car) {
      await car.update(req.body);
      res.status(200).json({ message: 'Atualizado com sucesso', car });
    } else {
      res.status(404).json({ error: 'Carro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (car) {
      await car.destroy();
      res.status(200).json({ message: 'Excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Carro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
