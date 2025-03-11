const express = require('express');
const cors = require('cors');
const connection = require('./db'); // Importar a conexão com o banco de dados

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota de cadastro de usuário
app.post('/cadastro', (req, res) => {
    const { email, senha } = req.body;

    // Validação básica
    if (!email || !senha) {
        return res.status(400).json({ mensagem: 'Email e senha são obrigatórios!' });
    }

    // Inserir usuário no banco de dados
    const query = 'INSERT INTO usuarios (email, senha) VALUES (?, ?)';
    connection.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            return res.status(500).json({ mensagem: 'Erro ao cadastrar usuário!' });
        }
        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    });
});

// Rota de cadastro de carro
app.post('/carros', (req, res) => {
    const { placa, marca, bloco, vaga } = req.body;

    // Validação básica
    if (!placa || !marca || !bloco || !vaga) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
    }

    // Inserir carro no banco de dados
    const query = 'INSERT INTO carros (placa, marca, bloco, vaga) VALUES (?, ?, ?, ?)';
    connection.query(query, [placa, marca, bloco, vaga], (err, results) => {
        if (err) {
            console.error('Erro ao cadastrar carro:', err);
            return res.status(500).json({ mensagem: 'Erro ao cadastrar carro!' });
        }
        return res.status(201).json({ mensagem: 'Carro cadastrado com sucesso!' });
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});