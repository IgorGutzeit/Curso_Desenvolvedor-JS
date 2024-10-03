let arr = [1, 2, 3, 4, 5];

// find(): retorna o primeiro elemento que setisfaz a condição
let maiorQueTres = arr.find((elemento) => elemento > 3);
console.log("Primeiro elemento maior que 3: " + maiorQueTres);


// findIndex(): retorna o indice do primeiro elemento que setisfaz a condição
let indiceMaiorQueTres = arr.findIndex((elemento) => elemento > 3);
console.log("Indice do primeiro elemento maior que 3: " + indiceMaiorQueTres);


// some(): retorna "true" se pelo menos 1 elemento satidfaz a condição
let temMaiorQueTres = arr.some((elemento) => elemento > 3);
console.log("Tem maiores que 3: " + temMaiorQueTres);
let temMaiorQueCinco = arr.some((elemento) => elemento > 5);
console.log("Tem maiores que 5: " + temMaiorQueCinco);


// every(): retorna "true" se todos os elementos satisfazem a condição
let todosMaioresQueTres = arr.every((elemento) => elemento > 3);
console.log("Todos maiores que 3: " + todosMaioresQueTres);
let todosMaioresQueZero = arr.every((elemento) => elemento > 0);
console.log("Todos maiores que 0: " + todosMaioresQueZero);


// includes(): retorna true se o elemento está no Array
let possuiCinco = arr.includes(5);
console.log("Esse array possui o número 5: " + possuiCinco); // true