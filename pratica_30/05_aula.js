/*
Baixar o Express. No terminal:
npm install express --save
*/

//Rodar: node ./05_aula.js

var express = require('express');
var app = express();
var port = 8030;
var hostname = '127.0.0.1';

//http://127.0.0.1:8030
app.get('/', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send('Olá, Mundo!!!');
});

//http://127.0.0.1:8030/info
app.get('/info', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send('Esta é a página de informação.');
});

//http://127.0.0.1:8030/index.html
app.get('/index.html', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<html>
                <head>
                    <title>Página Inicial</title>
                </head>
                <body>
                    <h1>Esta é a Página Inicial</h1>
                </body>
                </html>`);
});

//http://127.0.0.1:8030/contato/:id
app.get('/contato/:id', function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<html>
                <head>
                    <title>Recebimento de Parãmetro</title>
                </head>
                <body>
                    <h1>O parâmetro ${req.params.id} foi recebido com sucesso.</h1>
                </body>
                </html>`);
});

app.listen(port, hostname, function() {
    console.log(`O servidor foi iniciado no host ${hostname} e porta ${port}`);
});