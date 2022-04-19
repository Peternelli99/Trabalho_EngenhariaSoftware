const db = require('../db');

module.exports = {
    catalogarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM produto', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    inserir: (nome, descricao, preco, Produtor_ID) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO produto (nome, descricao, preco, Produtor_ID) VALUES (?, ?, ?, ?)',
                [nome, descricao, preco, Produtor_ID], (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.inserirCodigo);
                }
            );
        });
    },

    alterar: (id, nome, descricao, preco) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE produto SET nome = ?, descricao = ?, preco = ? WHERE ID = ?',
                [nome, descricao, preco, id], (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.alterarCodigo);
                }
            );
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM produto WHERE ID = ?',
                [id], (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },
};