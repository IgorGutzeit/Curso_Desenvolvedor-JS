let arr = [1, 2, 3, 4, 5];

// map: percorre o array e retorna um novo array com base em um função
let dobroArr = arr.map((elemento) => elemento * 2); // Com Arrow Function

// let dobro = arr.map( function (element){
//     return element * 2;
// }); // Com functions "comuns"

console.log(dobroArr); // [2, 4, 6, 8, 10]


const alunos = [
    { nome: "Igor", idade: 25, notas: [9, 8, 10, 9]},
    { nome: "João", idade: 24, notas: [10, 8, 9.5, 9]},
    { nome: "Maria", idade: 22, notas: [8, 8, 7.5, 9]},
];

const alunosComMedia = alunos.map(aluno => {

    let somaNotas = 0;

    aluno.notas.forEach(nota => {
        somaNotas += nota;
    });

    const media = (somaNotas / aluno.notas.length).toFixed(2);

    return {
        nome: aluno.nome,
        idade: aluno.idade,
        notas: aluno.notas,
        media: media
    };

});

console.log("#----------- Alunos Com Notas: -----------#");

alunos.forEach((aluno) => {
    console.log(aluno);
});


console.log("#----------- Alunos Com Media: -----------#");

alunosComMedia.forEach((aluno) => {
    console.log(aluno);
});