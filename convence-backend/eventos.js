import mongoose from "mongoose";

const eventosSchema = new mongoose.Schema({
    nome: String,
    data: String,
    descricao: String,
})

export default mongoose.model('eventos', eventosSchema, 'eventosdbs');