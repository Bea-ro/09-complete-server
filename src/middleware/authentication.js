let jwt = require('jsonwebtoken');
const { verifyToken } = require('../config/jwt');

const hasValidAuthJwt = (req, res, next) => {
  try {
    //const {token} = req.query
    const { authorization } = req.headers;
    const [, token] = authorization.split(' ');
    const payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({ data: 'No authenticated' });
  }
};

const isAuthenticated = (req, res, next) => {
        const {token} = req.query
        if (token === process.env.AUTH_TOKEN) {
            next();
            return
        } else {res.status(401).json({data: 'Wrong token authentication'})}
}

module.exports = { hasValidAuthJwt, isAuthenticated };