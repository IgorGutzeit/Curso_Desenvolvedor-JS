
function somar(a, b){
    return a + b;
};

function calcularIMC(peso, altura){
    let resultadoIMC = peso / (altura**2);
    return resultadoIMC.toFixed(2);
};

function msgBoasVindas(){
    console.log("---------------------");
    console.log("Bem-vindo ao nosso programa!");
    console.log("---------------------");
};

// FUNÇÃO SOMAR
// let resultado = somar(1, 2);
// let resultado2 = somar(10, 22);
// let resultado3 = somar(287, 113);
// console.log(resultado); // 3
// console.log(resultado2); // 32
// console.log(resultado3); // 400


//FUNÇÃO CALCULAR IMC
let imc = calcularIMC(90, 1.82);
console.log(imc);


msgBoasVindas();


