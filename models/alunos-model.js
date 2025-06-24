function listarAlunos() {
    const listaAlunos = [
        {
    id: 1,
    nome: "Maria Clara",
    idade: 21,
    curso: "Técnico em Informática" // Referência ao curso Técnico em Administração""
  },
  {
    id: 2,
    nome: "Danilo Silva",
    idade: 33,
    curso: "Administração"
  },
  {
    id: 3,
    nome: "Caique José",
    idade: 28,
    curso: "Podologia"
  }
    ]

    return listaAlunos
}

module.exports = {
    listarAlunos
}