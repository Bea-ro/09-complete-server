const express = require('express');
const {
  getAllArtworks,
  getArtworkById,
  createArtwork,
  updateArtworkById,
  deleteArtwork,
  deleteArtworkFieldById
} = require('../controllers/artworks');
const router = express.Router();
const { isAuthenticated } = require('../../middleware/authentication');

router.get('/', getAllArtworks);
router.get('/:id', getArtworkById);
router.post('/', isAuthenticated, createArtwork);
router.put('/:id', isAuthenticated, updateArtworkById);
router.delete('/:id', isAuthenticated, deleteArtwork);
router.delete('/:id/author', isAuthenticated, deleteArtworkFieldById);

module.exports = router;

