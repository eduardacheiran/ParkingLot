const mysql = require('mysql2');

// Configurações da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'parking_lot'
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});

// Exportar a conexão para ser usada em outros arquivos
module.exports = connection;