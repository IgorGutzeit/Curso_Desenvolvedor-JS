let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1];

console.log("Array original: " + arr);
console.log("---------------------------------------------------");

// Exercício 1
let filtrarPares = arr.filter((pares) => pares % 2 == 0);
console.log("Numeros pares presentes no array: " + filtrarPares);
console.log("---------------------------------------------------");

// Exercício 2
let multiplicaArray = ((arr, multiplicador) => {
    let arrMult = arr.map((numero) => numero * multiplicador);
    return arrMult;
});
console.log("Eelementos do Array multiplicados pelo valor passado como parâmetro: " + multiplicaArray(arr, 2));
console.log("---------------------------------------------------");

// Exercício 3
let Ocorrencias = ((arr, num) => {

    // let count = 0;
    // arr.forEach(element => {
    //     if(element === num){
    //         count++;
    //     };
    // });
    // return count; // Solução com a função ".forEach()"

    let arrOcorrencias = arr.filter((numero) => numero == num).length; // A função ".length" faz com que seja armazenado apenas o tamanho do array gerado na função ".filter()", sendo assim correspondente ao número de elementos que satisfazem a função
    return arrOcorrencias;
});
console.log("Quantidade de vezes que o número 1 está presente no array: " + Ocorrencias(arr,1));
