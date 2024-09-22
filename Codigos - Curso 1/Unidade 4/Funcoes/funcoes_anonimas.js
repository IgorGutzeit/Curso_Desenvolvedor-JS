// Funções anonimas e expressões de função

// Função anonima: função sem nome
// Expressão de função: função atribuída a uma variável
let anonima = function() {
  console.log("Função Anonima");
};

anonima();


// Arrow Functions - Nessa aplicação tem a mesma ideia de funções anônimas
let arrow = () => {
    console.log("Arrow Function");
};

arrow();

// Arrow functions - Uso prático para simplificar as funções
let somar = (a,b) => (a + b);
let imcCalc = (peso, altura) => (peso / (altura**2)).toFixed(2);

console.log(somar(10, 20));
console.log(imcCalc(90, 1.82));