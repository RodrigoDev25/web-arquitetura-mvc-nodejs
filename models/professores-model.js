function listarProfessores() {
    const listaProfessores = [
        {
    id: 1,
    nome: "Ana Paula Mendes",
    especialidade: "Administração",
    curso: "Marketing"
  },
  {
    id: 2,
    nome: "Roberto Lima",
    especialidade: "Marketing",
    curso: "Administração"
  },
  {
    id: 3,
    nome: "Fernanda Costa",
    especialidade: "Gestão de Pessoas",
    curso: "RH"
  }
    ]

    return listaProfessores
}

module.exports = {
    listarProfessores
}