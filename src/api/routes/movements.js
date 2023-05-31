const express = require('express');
const {
  getAllMovements,
  createMovement,
  getMovementById,
  updateMovementById,
  deleteMovement
} = require('../controllers/movements');
const router = express.Router();
const { isAuthenticated } = require('../../middleware/authentication');

router.get('/', getAllMovements);
router.get('/:id', getMovementById);
router.post('/', isAuthenticated, createMovement);
router.put('/:id', isAuthenticated, updateMovementById);
router.delete('/:id', isAuthenticated, deleteMovement);

module.exports = router;
