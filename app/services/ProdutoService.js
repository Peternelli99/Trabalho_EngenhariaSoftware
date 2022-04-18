const db = require('../db');

module.exports = {
    catalogarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM produto', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};