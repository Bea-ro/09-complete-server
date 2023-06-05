const express = require('express');

const usersRouter = express.usersRouter();
const { loginUser, registerUser, getUsers } = require('../controllers/users');

usersRouter.get('/', getUsers);
usersRouter.post('/register', registerUser);
usersRouter.post('/login', loginUser);

module.exports = usersRouter;