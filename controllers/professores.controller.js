const professoresModel = require('../models/professores-model')

function listar2(req, res) {
    const professores = professoresModel.listarProfessores()

    res.json(professores)
}

module.exports = {
    listar2
}