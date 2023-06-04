const jwt = require('jsonwebtoken');

const signToken = (email) => {
 return jwt.sign( {email}, process.env.JWT_SECRET, { expiresIn: 60 * 60 });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  signToken,
  verifyToken
};
