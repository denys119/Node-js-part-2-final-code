require('dotenv').config();
const startDb = require('./utils/connectDb');
const CONFIG = require('./config/config');
const express = require('express');
const app = express();
const router = require('./routes');

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.json());

app.use('/api', router);

app.listen(CONFIG.PORT || 5000, () => {
  console.log("Express app is listening on port " + CONFIG.PORT || 5000);
});

startDb();