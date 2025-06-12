// Importando o módulo express
import express from 'express';

const app = express();
const users = []; // Array para armazenar os usuários


// Configurando o express para interpretar o corpo da requisição como JSON
app.use(express.json()); // Middleware para interpretar o corpo da requisição como JSON

//resposta para o método listen
app.listen(3000); // Inicia o servidor na porta 3000
console.log('Servidor rodando na porta 3000');


//metodo POST na rota /usuarios

app.post('/usuarios', (req, res) => {

    users.push(req.body); // Adiciona o novo usuário ao array

    res.status(201).json(req.body); // Define o status da resposta como 201 (Created) e envia o usuário criado como resposta em formato JSON
});

//resposta para o método GET na rota /usuarios
app.get('/usuarios', (req, res) => {

    res.status(200).json(users); // Define o status da resposta como 200 (OK) e envia o array de usuários como resposta em formato JSON

});



