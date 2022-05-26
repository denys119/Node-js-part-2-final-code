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

app.get('/', (req, res) => {
  res.render('index', { name: 'Denis' });
});

app.get('/users', (req, res) => {
  const users = [
    {
      name: 'Denis',
      age: 23
    },
    {
      name: 'John',
      age: 21
    }
  ];
  res.render('users', { name: 'Denis', users });
});

// 404 page 
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(CONFIG.PORT || 5000, () => {
  console.log("Express app is listening on port " + CONFIG.PORT || 5000);
});

startDb();