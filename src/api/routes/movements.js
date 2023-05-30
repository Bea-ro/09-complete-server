const express = require('express');
const {
  getAllMovements,
  createMovement,
  getMovementById,
  updateMovementById,
  deleteMovement
} = require('../controllers/movements');
const router = express.Router();

router.get('/', getAllMovements);
router.get('/:id', getMovementById);
router.post('/', createMovement);
router.put('/:id', updateMovementById);
router.delete('/:id', deleteMovement);

module.exports = router;
