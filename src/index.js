const dotenv = require('dotenv').config();
const express = require('express');
require('./config/db');
const mainRouter = require('./api/routes/index');
const connect = require('./config/db');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-type');
  next();
});
app.disable('x-powered-by');

app.use('/api', mainRouter);

app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Page not found' });
});

app.use((error, req, res, next) => {
  res.status(500).json({ data: 'Internal server error' });
});

const PORT = Number(process.env.PORT);

connect();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
