const dataAtual = new Date();
const dataEmMiliSegundos = 24 * 60 * 60 * 1000;

// Armazenando a data de 5 dias a frente na variável dataExpiração
const dataExpiracao = new Date(dataAtual.getTime() + 5 * dataEmMiliSegundos);
console.log(dataExpiracao);


// Modificando a hora
dataExpiracao.setHours(0, 0, 0, 0);

// Modificando o dia
dataExpiracao.setDate(5);

// Modificando o Mês
dataExpiracao.setMonth(11 - 1); // Novembro

// Modificando o Ano
dataExpiracao.setFullYear(2025);

// Modificando os Minutos
dataExpiracao.setMinutes(30);

// Modificando os Segundos
dataExpiracao.setSeconds(15);


console.log("Nova data: " + dataExpiracao);