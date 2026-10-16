import db from "../database/conexao.js";
 
export async function listarPlantas(req, res) {

    try {

        const [plantas] = await db.query("SELECT * FROM plantas ORDER BY id DESC");

        res.status(200).json(plantas);

    } catch (error) {

        res.status(500).json({ mensagem: "Erro ao buscar plantas", erro: error.message });

    }

}
 
export async function criarPlanta(req, res) {

    try {

        const { nome, especie, frequencia_rega, tipo_iluminacao } = req.body;

        const sql = "INSERT INTO plantas (nome, especie, frequencia_rega, tipo_iluminacao) VALUES (?, ?, ?, ?)";

        const [resultado] = await db.query(sql, [nome, especie, frequencia_rega, tipo_iluminacao]);
 
        res.status(201).json({ mensagem: "Planta cadastrada com sucesso!", id: resultado.insertId });

    } catch (error) {

        res.status(500).json({ mensagem: "Erro ao cadastrar planta", erro: error.message });

    }

}
 
export async function deletarPlanta(req, res) {
    try {

        const { id } = req.params;

        await db.query("DELETE FROM plantas WHERE id = ?", [id]);

        res.status(200).json({ mensagem: "Planta excluída com sucesso!" });

    } catch (error) {

        res.status(500).json({ mensagem: "Erro ao excluir planta", erro: error.message });

    }

}
 