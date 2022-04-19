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
        
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:[]};

        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let preco = req.body.preco;
        let Produtor_ID = req.body.Produtor_ID;

        if(nome && descricao && preco) {
            let idProduto = await ProdutoService.inserir(nome, descricao, preco, Produtor_ID);
            json.result = {
                ID: idProduto,
                nome,
                descricao,
                preco,
                Produtor_ID,
            }; 
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.ID
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let preco = req.body.preco;

        if(id && nome && descricao && preco) {
            await ProdutoService.alterar(id, nome, descricao, preco);
            json.result = {
                ID: id,
                nome,
                descricao,
                preco,
            }; 
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:[]};

        await ProdutoService.excluir(req.params.ID);

        res.json(json);
    }
}