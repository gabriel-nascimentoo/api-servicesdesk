const tecnicos = [
    {
        nome:"João da Silva",
        especialidade:"Redes"
    },
    {
        nome:"Maria Santos",
        especialidade:"Software"
    },
    {
        nome:"Carlos lima",
        especialidade:"hardware"
    }
]

function buscaPorEspecialidade(especialidade){
    return tecnicos.find(tecnico => tecnico.especialidade === especialidade)
}

module.exports = {
    buscaPorEspecialidade
}