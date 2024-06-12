const express = require('express');
const router = express.Router();
const ownerController = require('../controllers/ownerController');

// Rotas para os proprietários
router.post('/', ownerController.createOwner);
router.get('/', ownerController.getOwners);
router.put('/:id', ownerController.updateOwner);
router.delete('/:id', ownerController.deleteOwner);

module.exports = router;
