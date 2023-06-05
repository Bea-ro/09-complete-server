const express = require('express');
const authorsRouter = require('./authors');
const artworksRouter = require('./artworks');
const movementsRouter = require('./movements');
const usersRouter = require('./users');

const router = express.Router();

router.use('/authors', authorsRouter);
router.use('/artworks', artworksRouter);
router.use('/movements', movementsRouter);
router.use('/users', usersRouter);

module.exports = router;