const ProdutoService = require('../services/ProdutoService');

module.exports = {
    catalogarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let produtos = await ProdutoService.catalogarTodos();

        for(let i in produtos){
            json.result.push({
                nome: produtos[i].nome,
                descricao: produtos[i].descricao,
                preco: produtos[i].preco
            })
        }
    }
}