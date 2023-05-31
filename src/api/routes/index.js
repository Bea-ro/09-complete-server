const express = require('express');
const authorsRouter = require('./authors');
const artworksRouter = require('./artworks');
const movementsRouter = require('./movements');
const authRouter = require('./auth');

const router = express.Router();

router.use('/authors', authorsRouter);
router.use('/artworks', artworksRouter);
router.use('/movements', movementsRouter);
router.use('/auth', authRouter);

module.exports = router;