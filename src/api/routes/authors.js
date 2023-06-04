const express = require('express');
const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthor,
  addOrRemoveArtwork
} = require('../controllers/authors');
const router = express.Router();
const { isAuth } = require('../../middleware/authentication');

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', [isAuth], createAuthor);
router.put('/:id', [isAuth], updateAuthorById);
router.delete('/:id', [isAuth], deleteAuthor);
router.put('/:id/artwork', [isAuth], addOrRemoveArtwork);

module.exports = router;
