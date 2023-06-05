const express = require('express');
const { uploadImgCloudinary } = require('../../middlewares/uploadFile');
const { uploadAvatar, updateAvatar, deleteAvatar } = require('../controllers/avatars');

const avatarRouter = express.Router();
const { isAuth } = require('../../middlewares/authentication');

avatarRouter.post('/', [isAuth], uploadImgCloudinary.single('avatar'), uploadAvatar);
avatarRouter.patch('/:id', [isAuth], uploadImgCloudinary.single('avatar'), updateAvatar);
avatarRouter.delete('/:id', [isAuth], deleteAvatar);

module.exports = avatarRouter;
