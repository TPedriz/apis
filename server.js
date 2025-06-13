// Importando o módulo express
import express from 'express';
import PrismaClient from './generated/prisma';
const prisma = new PrismaClient()

const app = express();

app.listen(3000, () => {
    // Inicia o servidor na porta 3000
    console.log('Servidor rodando na porta 3000');
});

// Configurando o express para interpretar o corpo da requisição como JSON
app.use(express.json()); // Middleware para interpretar o corpo da requisição como JSON


//metodo POST na rota /usuarios

app.post('/usuarios', async (req, res) => {

    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name, // Obtém o nome do usuário do corpo da requisição
                age: req.body.age, // Obtsém a idade do usuário do corpo da requisição
                email: req.body.email // Obtém o email do usuário do corpo da requisição
            }
        });
        res.status(201).json(user); // Define o status da resposta como 201 (Created) e envia o usuário criado como resposta em formato JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }

});

//resposta para o método GET na rota /usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users); // Define o status da resposta como 200 (OK) e envia o array de usuários como resposta em formato JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }   
});



