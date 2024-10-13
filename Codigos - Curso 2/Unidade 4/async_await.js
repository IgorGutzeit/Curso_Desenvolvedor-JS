const promisseAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {id: 1, nome: 'Guilherme'},
            {id: 2, nome: 'Ricardo'},
            {id: 3, nome: 'Pablo'}
        ]);
    }, 2000);
});


const promisseAPI2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            nome: 'Guilherme',
            sobrenome: 'Boulos',
            numeroCampanha: 50
        });
    }, 2000);
});


async function retornarCandidatoCompleto() {
    const listaCadidatos = await promisseAPI;
    const candidato = await promisseAPI2;

    const candidatoCompleto = `${listaCadidatos[0].id} - ${candidato.nome} ${candidato.sobrenome} - Número da Campanha ${candidato.numeroCampanha}`;
    console.log("Dados do candidato solicitados com sucesso!");
    return candidatoCompleto;
};

retornarCandidatoCompleto().then(resultado => {
    console.log(resultado);
});