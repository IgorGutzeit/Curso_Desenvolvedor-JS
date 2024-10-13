let frase = "O rato roeu a roupa do rei de roma";
let nome = "Igor Gutzeit Affonso";


function substituirPalavra(frase, palavra, substitui) {

    let novaFrase = frase.replace(palavra, substitui);
    return novaFrase;
};


function contarPalavras(frase) {

    let count = 0;
    let palavras = frase.split(" ");
    palavras.forEach(palavra => {
        count++;
    });
    return count;
};


function extrairIniciais(nome) {

    let partes = nome.split(" ");
    let iniciais = partes.map((parte => parte.charAt(0).toUpperCase())).join('. ').concat(".");
    return iniciais;
};


function contarVogais(str) {

        // Define as vogais
        const vogais = 'aeiouáéíóúãẽĩõũAEIOUÁÉÍÓÚÃẼĨÕŨ';
        let count = 0;
    
        // Converte a string para um array de caracteres e itera sobre ele
        str.split('').forEach(char => {
            // Verifica se o caractere atual é uma vogal
            if (vogais.indexOf(char) !== -1) {
                count++;
            };
        });
    
        return count;    
};


console.log("");
console.log("--- Exercício 1 ---");
console.log("Frase original: " + frase);
console.log("Frase após a substituição: " + substituirPalavra(frase, "roma", "paris"));


console.log("");
console.log("--- Exercício 2 ---");
console.log(frase.split(" "));
console.log("Número de palavras da frase: " + contarPalavras(frase));
console.log(nome.split(" "));
console.log("Número de palavras do nome: " + contarPalavras(nome));


console.log("");
console.log("--- Exercício 3 ---");
console.log("Iniciais do nome: " + extrairIniciais(nome));
console.log("Iniciais da frase: " + extrairIniciais(frase));



console.log("");
console.log("--- Exercício 4 ---");
console.log("Número de vogais da frase: " + contarVogais(frase));
console.log("Número de vogais do nome: " + contarVogais(nome));