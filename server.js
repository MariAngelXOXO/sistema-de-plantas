import express from "express";
import "dotenv/config";
import cors from "cors";
import plantasRoutes from "../routes/plantasRoutes.js";
import { testarConexao } from "../database/conexao.js";
 
const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(cors());
app.use(express.json());
 
app.use("/plantas", plantasRoutes);
 
app.get("/", (req, res) => {
    res.status(200).json({ mensagem: "API do Sistema de Plantas a funcionar!" });
});
 
async function iniciarServidor() {
    try {
        await testarConexao();
        console.log("Conectado ao MySQL com sucesso!");
 
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (erro) {
        console.log("Não foi possível iniciar o servidor");
        console.log(erro.message);
    }
}
 
iniciarServidor();