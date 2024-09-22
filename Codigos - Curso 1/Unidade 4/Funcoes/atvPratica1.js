// Atividade pratica 1 - Unidade 4

// Função padrão
function soma(n1, n2) {
    return n1 + n2;
};


// Função anonima
let subtracao = function (n1, n2) {
    console.log(n1 - n2);
};


// Função Arrow
let multiplicacao = (n1, n2) => {
    console.log(n1 * n2);
};


// Função Arrow Simplificada
let divisao = (n1, n2) => (n1 / n2);


//Resultados:
console.log("====== Resultados: ======");
console.log(soma(20, 20)); // 40
subtracao(20, 10); // 10
multiplicacao(20, 5); // 100
console.log(divisao(20, 5)); // 4
