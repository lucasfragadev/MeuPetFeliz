// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/imagens', express.static(path.join(__dirname, '../imagens')));
app.use('/js', express.static(path.join(__dirname, '../js')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../contact.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../gallery.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../products.html'));
});

app.use('/api', routes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
