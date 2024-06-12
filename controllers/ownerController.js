const { Owner, Car } = require('../models');

exports.createOwner = async (req, res) => {
  try {
    const owner = await Owner.create(req.body);
    res.status(201).json(owner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOwners = async (req, res) => {
  try {
    const owners = await Owner.findAll({ include: [{ model: Car, as: 'cars' }] });
    res.status(200).json(owners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOwner = async (req, res) => {
  try {
    const owner = await Owner.findByPk(req.params.id);
    if (owner) {
      await owner.update(req.body);
      res.status(200).json(owner);
    } else {
      res.status(404).json({ error: 'Owner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.findByPk(req.params.id);
    if (owner) {
      await owner.destroy();
      res.status(200).json({ message: 'Owner deleted' });
    } else {
      res.status(404).json({ error: 'Owner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
