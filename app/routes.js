const express = require('express');
const router = express.Router();

const ProdutoController = require('./controllers/ProdutoController')

router.get('/produtor/catalogo', ProdutoController.catalogarTodos);
router.post('/produto', ProdutoController.inserir);
router.put('/produto/:ID', ProdutoController.alterar);
router.delete('/produto/:ID', ProdutoController.excluir);

module.exports = router;