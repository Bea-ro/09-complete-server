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
const { isAuthenticated } = require('../../middleware/authentication');

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', isAuthenticated, createAuthor);
router.put('/:id', isAuthenticated, updateAuthorById);
router.delete('/:id', isAuthenticated, deleteAuthor);
router.put('/:id/artwork', isAuthenticated, addOrRemoveArtwork);

module.exports = router;
