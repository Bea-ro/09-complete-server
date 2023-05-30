const Movement = require('../models/movement');

const getAllMovements = async (req, res, next) => {
  try {
    const Movements = await Movement.find().populate('mainArtworks').populate('authors');
    return res.status(200).json(Movements);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se han encontrado movimientos', error: error });
  }
};

const createMovement = async (req, res, next) => {
  try {
    const newMovement = new Movement(req.body);
    const createdMovement = await newMovement.save();
    return res.status(201).json(createdMovement);
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se ha podido crear el movimiento', error: error });
  }
};

const getMovementById = async (req, res, next) => {
  try {
    const movement = await Movement.findById(req.params.id)
      .populate('mainArtworks')
      .populate('authors');
    return res.status(200).json(movement);
  } catch (error) {
    return res.status(400).json({ mensaje: 'Movimiento no encontrado', error: error });
  }
};

const updateMovementById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedMovement = await Movement.findByIdAndUpdate(id, req.body, {
      new: true
    });
    return res.status(200).json(updatedMovement);
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error actualizando movimiento', error: error });
  }
};

const deleteMovement = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movement.findByIdAndDelete(id);
    return res.status(200).json('Movimiento borrado');
  } catch (error) {
    return res.status(400).json({ mensaje: 'No se ha podido borrar el movimiento', error: error });
  }
};

module.exports = {
  getAllMovements,
  createMovement,
  getMovementById,
  updateMovementById,
  deleteMovement
};
