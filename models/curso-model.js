function listarCursos() {
    const listaCursos = [
        {
            id: 1,
            nome: "Técnico em Informática",
            duracao: 1200,
            descricao: "Base para computação"
        },
        {
            id: 2,
            nome: "Técnico em Administração",
            duracao: 800,
            descricao: "Administração e Marketing"
        }
    ]

    return listaCursos
}

module.exports = {
    listarCursos
}