import mongoose from "mongoose";

const ingolSchema = new mongoose.Schema({
    email: String,
    senha: String,
})

export default mongoose.model('ingol', ingolSchema);