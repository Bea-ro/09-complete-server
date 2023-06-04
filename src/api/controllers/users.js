const User = require('../models/user');
const { signToken } = require('../../config/jwt');
const bcrypt = require('bcrypt');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: 'Users not found', error: error });
  }
};

const registerUser = async (req, res, next) => {
  try {
    const user = await User.findOne(req.body.email);
    if (user) {
      throw new Error('User already exists');
    }
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(400).json({ message: 'Error registering user', error: error });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const userDB = await User.findOne({ email: req.body.email });
    if (!userDB) {
      return res.status(400).json({ message: 'User does not exists' });
    }

    if (bcrypt.compareSync(req.body.password, userDB.password)) {
      const token = signToken(userDB._id);
      return res.status(200).json({ token, userDB });
    } else {
        return res.status(400).json({ message: 'Incorrect password' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Login failed' });
  }
};

module.exports = {
  getUsers,
  registerUser,
  loginUser
};
