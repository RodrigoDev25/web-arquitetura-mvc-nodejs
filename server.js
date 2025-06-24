const express = require('express')
const cursoController = require("./controllers/curso-controller")
const app = express()

app.get('/listar-cursos', cursoController.listar)



//_______________Porta________________//
app.listen(4000, function() {
    console.log("Rodando na porta 4000")
})