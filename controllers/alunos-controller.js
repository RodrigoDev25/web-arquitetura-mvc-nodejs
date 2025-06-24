const alunosModel = require('../models/alunos-model')

function listar3(req, res) {
    const alunos = alunosModel.listarAlunos()

    res.json(alunos)
}

module.exports = {
    listar3
}