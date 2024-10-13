//Executar uma função após um determinado tempo
const timeOut = setTimeout(() => {
    console.log("Executando setTimeout após 2 segundos");
}, 2000);


// Executar uma função de tempos em tempos
const interval = setInterval(() => {
    console.log("Executando setInterval a cada 2 segundos");
}, 2000);


//Parar a execução de um setTimeOut ou setInterval
// clearTimeout(timeOut);
// clearInterval(interval);


/*Settando um intervalo de tempo para executar a parada 
da execução do setInterval usando setTimeout*/
setTimeout(() => {
    clearInterval(interval);
}, 10000);