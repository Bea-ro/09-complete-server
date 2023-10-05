const User = require('../api/models/user');
const { verifyToken } = require('../config/jwt');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({message: 'There is no token'});
    }

    const parsedToken = token?.replace('Bearer ', '');
    const validToken = verifyToken(parsedToken);
    const userLogued = await User.findById(validToken.email);

    userLogued.password = null;
    req.user = userLogued;
    next();
  } catch (error) {
    return res.status(401).json('Authentication failed. Please, login again.');
  }
};

module.exports = { isAuth };
