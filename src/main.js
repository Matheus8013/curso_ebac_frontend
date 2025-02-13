const listaDeAlunosENotas = [
    {
        nome : 'Ana', nota : 8
    },
    {
        nome : 'Bruno', nota : 9
    },
    {
        nome : 'Beatriz', nota : 6
    },
    {
        nome : 'Nicolas', nota : 3
    },
    {
        nome : 'Jorge', nota : 5
    },
    {
        nome : 'Amanda', nota : 6
    },
    {
        nome : 'Ricardo', nota : 4
    },
    {
        nome : 'Bruna', nota : 7
    },
]

const relatorioAlunosAprovados = listaDeAlunosENotas.filter((item) => {
    return item.nota >= 6
});

const relatorioAlunosReprovados = listaDeAlunosENotas.filter((item) => {
    return item.nota < 6
});

console.log('Estes foram os alunos aprovados:')
console.log(relatorioAlunosAprovados)

console.log('Estes foram os alunos reprovados:')
console.log(relatorioAlunosReprovados)

