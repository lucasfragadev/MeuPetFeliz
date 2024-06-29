// routes.js
const express = require('express');
const router = express.Router();
const {db} = require('./db');

// CRUD para Produtos
router.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post('/products', (req, res) => {
  const product = req.body;
  db.query('INSERT INTO products SET ?', product, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...product });
  });
});

router.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = req.body;
  db.query('UPDATE products SET ? WHERE id = ?', [product, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Produto atualizado com sucesso' });
  });
});

router.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Produto removido com sucesso' });
  });
});

// CRUD para Galeria
router.get('/gallery', (req, res) => {
  db.query('SELECT * FROM gallery', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post('/gallery', (req, res) => {
  const galleryItem = req.body;
  db.query('INSERT INTO gallery SET ?', galleryItem, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...galleryItem });
  });
});

router.delete('/gallery/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM gallery WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Item da galeria removido com sucesso' });
  });
});

// CRUD para Contatos
router.post('/contacts', (req, res) => {
  const contact = req.body;
  db.query('INSERT INTO contacts SET ?', [contact], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...contact });
  });
});

// CRUD para Assinantes
router.post('/subscribers', (req, res) => {
  const subscriber = req.body;
  db.query('INSERT INTO subscribers(email) VALUES(?)', [subscriber.email], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...subscriber });
  });
});

module.exports = router;
