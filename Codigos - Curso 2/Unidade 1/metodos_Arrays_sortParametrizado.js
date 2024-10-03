let arr = [5, 3, 2, 4, 1, 6];

// Compara o elemento anterior com o elemento seguinte
// Exemplo abaixo: SE o elemento 1(A) for menor que o elemento 2(B), ele(A) é jogado para o começo, se não é jogado para o final
arr.sort((a, b) => a - b); // lista ordenada de forma crescente
console.log(arr);


arr.sort((a, b) => b - a); // lista ordenada de forma decrescente
console.log(arr);


// Exemplo com objetos
let alunos = [
    { id: 1, nome: "João"},
    { id: 2, nome: "Maria"},
    { id: 3, nome: "José"}
];

alunos.sort((a,b) => b.id - a.id); // Ordenando de forma decrescente com base no valor do ID

alunos.forEach(aluno => {
    console.log(aluno.nome);    
}); // Exibindo array com o método ".forEach();"
