const User = require('../models/user');
const { signToken } = require('../config/jwt');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error('User already exists');
    }
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    // const {password, ...rest} = newUser.toObject()
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error registering user', error: error });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const userDB = await User.findOne({ email: req.body.email });
    if (!userDB) {
      return res.status(401).json({ data: 'User does not exists' });
    }

    if (bcrypt.compareSync(req.body.password, userDB.password)) {
      const token = signToken({ id: userDB._id });
      return res.status(200).json({ token, userDB });
    } else {
      return res.status(401).json({ data: 'Incorrect email or password' });
    }
  } catch (error) {
    return res.status(401).json('Login failed');
  }
};

//ver si necesitamos uno o todos
const getUsers = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const { password, ...rest } = user;
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ mensaje: 'El usuario no está registrado', error: error });
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json("Users not found 😑");
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUsers
};
