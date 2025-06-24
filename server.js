const express = require('express')
const cursoController = require("./controllers/curso-controller")
const professoresController = require("./controllers/professores.controller")
const alunosController = require("./controllers/alunos-controller")
const app = express()

app.get('/listar-cursos', cursoController.listar)
app.get('/listar-professores', professoresController.listar2)
app.get('/listar-alunos', alunosController.listar3)



//_______________Porta________________//
app.listen(4000, function() {
    console.log("Rodando na porta 4000")
})