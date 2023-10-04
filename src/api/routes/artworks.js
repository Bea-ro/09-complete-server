const express = require('express');
const {
  getAllArtworks,
  getArtworkById,
  createArtwork,
  updateArtworkById,
  deleteArtwork,
  deleteArtworkFieldById,
  uploadArtworkImg
} = require('../controllers/artworks');
const router = express.Router();
const { isAuth } = require('../../middlewares/authentication');
const { uploadImgCloudinary } = require('../../middlewares/uploadFile');

router.get('/', getAllArtworks);
router.get('/:id', getArtworkById);
router.post('/', [isAuth], uploadImgCloudinary.single('image'), createArtwork);
router.put('/:id', [isAuth], updateArtworkById);
router.patch('/:id', [isAuth], uploadImgCloudinary.single('image'), uploadArtworkImg);
router.delete('/:id', [isAuth], deleteArtwork);
router.delete('/:id/author', [isAuth], deleteArtworkFieldById);

module.exports = router;
