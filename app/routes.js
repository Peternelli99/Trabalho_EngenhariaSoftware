const express = require('express');
const router = express.Router();

const ProdutoController = require('./controllers/ProdutoController')

router.get('/produtor/catalogo', ProdutoController.catalogarTodos);

module.exports = router;