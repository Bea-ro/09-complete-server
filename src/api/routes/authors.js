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

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', createAuthor);
router.put('/:id', updateAuthorById);
router.delete('/:id', deleteAuthor);
router.put('/:id/obra', addOrRemoveArtwork);

module.exports = router;
