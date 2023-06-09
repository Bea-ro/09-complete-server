const express = require('express');

const router = express.Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
  deregisterUser,
  uploadAvatar
} = require('../controllers/users');
const { isAuth } = require('../../middlewares/authentication');
const { uploadImgCloudinary } = require('../../middlewares/uploadFile');

router.get('/', [isAuth], getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/:id', [isAuth], uploadImgCloudinary.single('avatar'), uploadAvatar);
router.delete('/:id', [isAuth], deregisterUser);

module.exports = router;
