let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let maiorQCinco = arr.filter(elementos => {
//     return elementos > 5;
// }); // Jeito mais verboso - Exemplo 1

// let maiorDoQueCinco = arr.filter(function(elementos) {
//     return elementos > 5;
// }); // Jeito mais verboso - Exemplo 2

let maiorQueCinco = arr.filter(elementos => elementos > 5); // Com Arrow Function

console.log(maiorQueCinco);