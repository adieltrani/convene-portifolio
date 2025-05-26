import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ingol from './apis/ingol.js';
import cors from 'cors';

const app = express(); //Cria Uma Instancia do app em express
const PORT = 3000; //Define a porta que o Server vai rodar

dotenv.config(); //Premite o uso de variaveis de ambiente
app.use(cors()); //Premite a comunicacao com o Front em outra porta
app.use(express.json()); //Permite o middleware para persear requisicoes JSON

const connectDB = async () => {
  try{
     await mongoose.connect(process.env.MONGO_URI);
     console.log('Banco de Dados Conectado!');
     return

  }catch(error){
    console.log('Erro ao se conectar ao Bando de Dados!', error)

  }

} //Funcao que cria uma conexao com o DB

connectDB(); //Inicia a funcao que inicia a conexao com o DB

app.post("/register", async (req, res) => {
   
 try {
   const {email} = req.body;
   const usuarioexist = await ingol.findOne({email: email});
   //Aqui verifica se esse email existe no DB
   if (usuarioexist){
      console.log('Ja existe uma conta com esse email!')
      return res.status(409).json({mensagem: "Ja existe uma conta com esse email!"})
      //Aqui retorna pro usuario se existe
   }
   else{
      const novoLogin = await ingol.create(req.body)
      res.status(200).json({mensagem: "Deu certo!"})
      //Aqui cria um novo usuario caso nao existir
   }

 } catch (error) {
    console.error("Erro ao criar login:", error);
    res.status(500).json({ error: error.message });
 }}); 

// app.get("/login", async (req, res) => {
//  try {
//     const ingols = await ingol.find();
//     res.json(ingols)
//  } catch (error) {
//     console.error("Erro ao criar login:", error);
//     res.status(500).json({ error: error.message });
//  }});

app.listen(PORT, () => console.log(`O Servidor está rodando na porta ${PORT}`));