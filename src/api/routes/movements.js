const express = require('express');
const {
  getAllMovements,
  createMovement,
  getMovementById,
  updateMovementById,
  deleteMovement
} = require('../controllers/movements');
const movementsRouter = express.movementsRouter();
const { isAuth } = require('../../middlewares/authentication');

movementsRouter.get('/', getAllMovements);
movementsRouter.get('/:id', getMovementById);
movementsRouter.post('/', [isAuth], createMovement);
movementsRouter.put('/:id', [isAuth], updateMovementById);
movementsRouter.delete('/:id', [isAuth], deleteMovement);

module.exports = movementsRouter;
