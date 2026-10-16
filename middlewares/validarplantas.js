function validarPlanta(req, res, next) {
    const { nome, especie, frequencia_rega, tipo_iluminacao } = req.body;

    if (!nome || !especie || !frequencia_rega || !tipo_iluminacao) {
        return res.status(400).json({ erro: 'Preencha todos os campos!' });
    }

    next();
}

module.exports = { validarPlanta };