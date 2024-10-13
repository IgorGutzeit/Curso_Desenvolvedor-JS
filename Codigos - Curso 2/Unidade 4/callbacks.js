function somarValores(num1, num2, callback) {
    let resultado = num1 + num2;
    callback(resultado);
};
somarValores(10, 20, console.log);