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
const { isAuth } = require('../../middleware/authentication');

router.get('/', getAllArtworks);
router.get('/:id', getArtworkById);
router.post('/', [isAuth], createArtwork);
router.put('/:id', [isAuth], updateArtworkById);
router.delete('/:id', [isAuth], deleteArtwork);
router.delete('/:id/author', [isAuth], deleteArtworkFieldById);

module.exports = router;

