const express = require('express');
const { loginUser, registerUser, getUser } = require('../controllers/user');
const { hasValidAuthJwt } = require('../../middleware/authentication')

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', hasValidAuthJwt, getUser);
