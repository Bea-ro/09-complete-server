const express = require('express');
const authorsRouter = require('./authors');
const artworksRouter = require('./artworks');
const movementsRouter = require('./movements');
const usersRouter = require('./users');
const avatarRouter = require('./avatars')

const router = express.Router();

router.use('/authors', authorsRouter);
router.use('/artworks', artworksRouter);
router.use('/movements', movementsRouter);
router.use('/users', usersRouter);
router.use('/avatar', avatarRouter);

module.exports = router;

