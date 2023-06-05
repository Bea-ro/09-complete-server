const express = require('express');
const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthor,
  addOrRemoveArtwork
} = require('../controllers/authors');
const authorsRouter = express.Router();
const { isAuth } = require('../../middlewares/authentication');

authorsRouter.get('/', getAllAuthors);
authorsRouter.get('/:id', getAuthorById);
authorsRouter.post('/', [isAuth], createAuthor);
authorsRouter.put('/:id', [isAuth], updateAuthorById);
authorsRouter.delete('/:id', [isAuth], deleteAuthor);
authorsRouter.put('/:id/artwork', [isAuth], addOrRemoveArtwork);

module.exports = authorsRouter;
