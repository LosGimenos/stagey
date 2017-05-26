if (!process.env.PORT) {
  require('dotenv').config();
}

const path = require('path');
const express = require('express');

const app = require('./app.js');

app.use(express.static(path.join(__dirname, '/dist')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log('listening');
})
