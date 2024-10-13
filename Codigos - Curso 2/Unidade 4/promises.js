const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolvida");
        // reject("Rejeitada");
        // reject(new Error('Erro')); // Normalmente é passado uma instância de Error ao invés de uma mensagem criada manualmente
    }, 2000);
});


// Extra Async e Await
async function executaPromessa() {
    try {
        // Aguarda a promessa ser resolvida e retorna o valor passado por parâmetro da função resolve
        const resultado = await promessa;
        return resultado;
    } catch (erro) {
        console.log(erro);
    };
};

// executaPromessa(); // Chamando a função asyncrona


promessa
    .then(resultado => {
        console.log(resultado); // Resultado passado através do parâmetro da função resolve
    }).catch(erro => {
        console.log(erro); // Resultado passado através do parâmetro da função reject
    });