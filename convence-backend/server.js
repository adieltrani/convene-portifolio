import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ingol from './apis/ingol.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

const connectDB = async () => {
  try{
     await mongoose.connect(process.env.MONGO_URI);
     console.log('Conectou kraiokkk');

  }catch(error){
    console.log('moio paizao', error)

  }

}
connectDB();

app.post("/login", async (req, res) => {
   
 try {
    const novoLogin = await ingol.create(req.body)
    res.json(novoLogin)
 } catch (error) {
    console.error("Erro ao criar login:", error);
    res.status(500).json({ error: error.message });
 }
});

app.get("/login", async (req, res) => {
 try {
    const ingols = await ingol.find();
    res.json(ingols)
 } catch (error) {
    console.error("Erro ao criar login:", error);
    res.status(500).json({ error: error.message });
 }
});

app.listen(PORT, () => console.log(`O Servidor está rodando na porta ${PORT}`));