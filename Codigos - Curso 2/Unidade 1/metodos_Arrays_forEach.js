let arr = [1, 2, 3, 4, 5];

// Todos os parâmetros são opcionais
// forEach: Percorre o array e executa uma função para cada elemento
arr.forEach(function(elemento, indice, array){
    console.log("Elemento: " + elemento);
    console.log("Indice: " + indice);
    console.log("#--------------#");
    // console.log(array); // Exibe o Array completo o numero de vezes correspondente ao numero de elementos
});