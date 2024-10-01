
notasAlunos = [
    { nome: "igor", notas: [8, 9.5, 10, 9] },
    { nome: "gaba", notas: [7, 7.5, 8, 9] },
    { nome: "ian", notas: [6, 5.5, 8, 6] },
    { nome: "joao", notas: [6, 8, 8, 6] }
];

for (let aluno of notasAlunos) {

    for (let key in aluno) {
        if (key === "notas") {

            let media = 0;
            let soma = 0;

            for (let nota of aluno.notas) {
                soma += nota;
            };

            media = (soma / 4).toFixed(2);

            if (media >= 7) {
                console.log("A media do aluno: " + aluno.nome + " foi maior que 7 e corresponde a: " + media);
            }
        };

    };

};
