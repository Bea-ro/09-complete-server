require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mainRouter = require('./src/api/routes/index');
const connect = require('./src/config/db');

const { configCloudinary } = require('./src/middlewares/uploadFile');

const app = express();

app.use(cors());
configCloudinary();

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 50,
  standardHeaders: false,
  legacyHeaders: false
});

app.use(limiter);
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-type');
  next();
});
app.disable('x-powered-by');

app.use('/api', mainRouter);

app.use('*', (req, res, next) => {
  res.status(404).json({ message: 'Page not found' });
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: 'Internal server error', error });
});

const PORT = Number(process.env.PORT);

connect();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
