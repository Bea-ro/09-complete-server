const express = require('express');
const {
  getAllArtworks,
  getArtworkById,
  createArtwork,
  updateArtworkById,
  deleteArtwork,
  deleteArtworkFieldById
} = require('../controllers/artworks');
const artworksRouter = express.Router();
const { isAuth } = require('../../middlewares/authentication');

artworksRouter.get('/', getAllArtworks);
artworksRouter.get('/:id', getArtworkById);
artworksRouter.post('/', [isAuth], createArtwork);
artworksRouter.put('/:id', [isAuth], updateArtworkById);
artworksRouter.delete('/:id', [isAuth], deleteArtwork);
artworksRouter.delete('/:id/author', [isAuth], deleteArtworkFieldById);

module.exports = artworksRouter;

