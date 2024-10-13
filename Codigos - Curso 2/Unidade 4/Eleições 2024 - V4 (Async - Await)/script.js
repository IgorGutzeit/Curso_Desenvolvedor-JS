
let candidatos = [];
let votosBrancos = 0;
let votosNulos = 0;

// Pegando os elementos do HTML
const btnVotar = document.getElementById('btn-votar');
const inputCandidato = document.getElementById('numero-candidato');
const ulCandidatos = document.getElementById('candidatos');
const spVotosBrancos = document.getElementById('votos-brancos');
const spVotosNulos = document.getElementById('votos-nulos');

// Promisse de candidatos simulando requisição que demoraria 2 segundos
const candidatosPromisse = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {numeroCampanha: '50', nome: 'Guilherme Boulos', votos:0},
            {numeroCampanha: '15', nome: 'Ricardo Nunes', votos:0},
            {numeroCampanha: '28', nome: 'Pablo Marçal', votos:0}
        ]);
    }, 2000);
});

btnVotar.addEventListener('click', () => {
    const numeroDigitado = inputCandidato.value;
    console.log(numeroDigitado);
    votaCandidato(numeroDigitado);
});

function renderizarCandidatos() {
    ulCandidatos.innerHTML = '';
    spVotosBrancos.innerText = votosBrancos;
    spVotosNulos.innerText = votosNulos;
    candidatos.sort((a, b) => b.votos - a.votos);
    candidatos.forEach(candidato => {
        ulCandidatos.innerHTML += /*html*/ `
            <li>
                <span class="nome-candidato">${candidato.nome}</span>
                <span class="votos-candidato">${candidato.votos} votos</span>
            </li>
        `;
    });
    console.log("Lisata de candidatos renderizada com sucesso!");
};

function votaCandidato(numeroCampanha) {
    const candidatoIndex = candidatos.findIndex(el => el.numeroCampanha == numeroCampanha);
    if(numeroCampanha === '') {
        votosBrancos++;
    }else if (candidatoIndex === -1) {
        votosNulos++;
    } else {
        candidatos[candidatoIndex].votos++;
    };
    renderizarCandidatos();
};

/* Função assíncrona que aguarda a requisição da promisse,
cria uma "listaCandidatos" recebendo essa requisição e popula
o array "candidatos" com os dados recebidos*/
async function retornarCandidatos() {
    const listaCadidatos = await candidatosPromisse;

    try {
    candidatos = listaCadidatos;   
    console.log("Lista dos candidatos carregada com sucesso!");
    return candidatos;
    } catch (error) {
        console.log(error);
    };
};

/* Chamada da função "retornarCandidatos()" que após a sua execução
está retornando uma promisse que gera o array "candidatos" e 
passando esse array como resultado para a função 
"renderizarCandidatos()"*/
retornarCandidatos().then(result => {
    renderizarCandidatos();
});