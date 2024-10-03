let arr = [1, 2, 3, 4, 5];

// slice(): retorna um novo array a partir de um indice inicial até um indice final
// Obs: Apenas o valor do indice sinalizado como inicial é considerado no sub-Array, o valor do indice sinalizado como final não entrará no sub-Array
// Obs2: NÃO modifica o array origirnal
let subArr = arr.slice(1, 4);
console.log(subArr); // [2, 3, 4]


// splice(): remove elementos de um array e opcionalmente adiciona novos elementos
// Obs: essa funcção considera todos os elementos no intervalo dos indices passados como parâmetros, incluindo o inicial E o final
// Obs2: Essa função ALTERA o Array original 
let removed = arr.splice(1, 3, "Dois", "Três", "Quatro"); // Removendo os elementos de indice 1 a 3 (Sinalizado por padrão nos dois primeiros parâmetros), e nos parâmetros seguintes adicionando novos elementos independente da quantidade desejada
console.log("Elementos removidos: " + removed);
console.log("Elementos restantes: " + arr);