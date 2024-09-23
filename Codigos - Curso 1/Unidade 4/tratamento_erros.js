let numero = 10;
let num = null;

try {
    console.log(numero.toUpperCase());

    //Erro de referência, executando o código chamando uma função ou variável que não existe
    console.log(testes);

    //TypeError - Ex operação com variável nula
    console.log(num.toUpperCase());

    // let test = "teste; -> Erro de Syntax (Escrita)
    //Erro de syntax permanesceu comentado pois o mesmo finaliza o andamento do código

} catch (error) {
    console.log("Um erro aconteceu: " + error.message);
} finally {
    console.log("Finalizou o bloco try catch - Execução do finally");
};

