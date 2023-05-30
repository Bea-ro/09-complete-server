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

router.get('/', getAllArtworks);
router.get('/:id', getArtworkById);
router.post('/', createArtwork);
router.put('/:id', updateArtworkById);
router.delete('/:id', deleteArtwork);
router.delete('/:id/autor', deleteArtworkFieldById);

module.exports = router;

