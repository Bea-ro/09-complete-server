const bcrypt = require('bcrypt');
const User = require('../models/user');
const { signToken } = require('../../config/jwt');
const { deleteImgCloudinary } = require('../../middlewares/uploadFile');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: 'Users not found.', error: error });
  }
};

const registerUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: 'User already exists.'});
   }
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(400).json({ message: 'Error registering user.', error: error });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const userDB = await User.findOne({ email: req.body.email });
    if (!userDB) {
      return res.status(400).json({ message: 'User does not exists.', error: error });
    }

    if (bcrypt.compareSync(req.body.password, userDB.password)) {
      const token = signToken(userDB._id);
      return res.status(200).json({ token, userDB });
    }
    return res.status(400).json({ message: 'Please, check your email and password and try again.', error: error });
  } catch (error) {
    return res.status(400).json({ message: 'Please, check your email and password and try again.', error: error });
  }
};

const deregisterUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.status(200).json('User deregistered.');
  } catch (error) {
    return res.status(400).json({ message: 'Error deregistering user.', error: error });
  }
};

const uploadAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.file) {
      const originalUser = await User.findById(id);
      if (originalUser.avatar) {
        deleteImgCloudinary(originalUser.avatar);
      }

      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: { avatar: req.file.path } },
        { new: true }
      );
      return res.status(200).json(updatedUser);
    }
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error uploading avatar.', error: error });
  }
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
  uploadAvatar,
  deregisterUser
};
