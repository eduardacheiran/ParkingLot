CREATE DATABASE parking_lot;
USE parking_lot;

-- Tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Tabela de carros
CREATE TABLE carros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(20) UNIQUE NOT NULL,
    marca VARCHAR(100) NOT NULL,
    bloco VARCHAR(10) NOT NULL,
    vaga VARCHAR(10) NOT NULL
);
