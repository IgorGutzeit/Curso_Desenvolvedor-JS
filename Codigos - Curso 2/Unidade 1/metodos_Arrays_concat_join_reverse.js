let arr = [1, 2, 3, 4, 5];

// concat(): retorna um novo array com os elementos concatenados sem modificar o array original
let arr2 = arr.concat(7, 8, 9);
console.log(arr2); // Retorna o novo array com os novos elementos
console.log(arr); // Retorna o array original


// join(): retorna UMA STRING com os elementos do array separados por um delimitador
let str = arr2.join(" - ");
console.log(str); 


// reverse(): inverte a ordem dos elementos do array
// Obs: ALTERA o array principal
// Para não alterar o Array principal deve-se primeiro armazena-lo em uma outra variável para que seja feita a operação, segue exemplo:
let arrReverso = [...arr]; // Operador necessário para que o array original não seja modificado, pois se armazenarmos apenas o "arr" a função ainda modifica os dois arrays por referência
arrReverso.reverse();

// Ou também podemos utilizar o metodo ".toReversed();"
// let arrReverso = arr.toReversed();

console.log("Array original: " + arr);
console.log("Array com a ordem dos itens invertida: " + arrReverso);