const express = require('express');

const router = express.Router();
const { loginUser, registerUser, getUsers } = require('../controllers/users');

router.get('/', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;