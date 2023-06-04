const express = require('express');
const {
  getAllMovements,
  createMovement,
  getMovementById,
  updateMovementById,
  deleteMovement
} = require('../controllers/movements');
const router = express.Router();
const { isAuth } = require('../../middleware/authentication');

router.get('/', getAllMovements);
router.get('/:id', getMovementById);
router.post('/', [isAuth], createMovement);
router.put('/:id', [isAuth], updateMovementById);
router.delete('/:id', [isAuth], deleteMovement);

module.exports = router;
