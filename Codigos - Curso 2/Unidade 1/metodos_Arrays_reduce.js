let arr = [1, 2, 3, 4, 5];

// let acumulador = 0;
// for (let elemento of arr){
//     acumulador += elemento;
// }; // Representação do método "reduce" usando uma variável acumuladora e a estrutura "for"


let soma = arr.reduce((acumulador, elemento) => acumulador + elemento); // O Código está somando todos os elementos do Array
console.log(soma);
