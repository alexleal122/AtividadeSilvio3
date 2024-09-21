// Importa o módulo 'express', que é um framework web para node.js
const express = require('express');

//cria uma aplicação Express
const app = express();

//Define a porta na qual o servidor vai escutar as requisições

const port = 3000;

//Define uma rota para a raiz('/') na aplicação

app.get('/',(req, res) =>{
    res.send('Hello World!');
});

//Inicia o servidor e faz com que ele escute a porta específica
//Exibe uma mensagem do console indicando que o servidor está rodando

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
});