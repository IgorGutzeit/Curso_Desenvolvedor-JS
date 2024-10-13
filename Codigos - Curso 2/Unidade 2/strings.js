let stringExemplo = "Curso de JavaScript";

console.log(stringExemplo.length); // 19 - Método usado para informar o tamanho da string
console.log(stringExemplo.indexOf("JavaScript")); // 9
console.log(stringExemplo.slice(0, 5)); // Esse método realiza um corte e retorna uma string nova com o corte realizado
console.log(stringExemplo.concat(" Completo")); // Esse método realiza a concatenação da string original com o que está sendo passado por parâmetro


console.log("-------------");
console.log("");
console.log("--- charAt() e charCodeAt() ---");

// charAt() e charCodeAt()
console.log(stringExemplo.charAt(0)); // Retorna o caractere correspondente ao indice passado por parâmentro
console.log(stringExemplo.charCodeAt(0)); // Retorna o código Unicode do caractere correspondente ao indice passado por parâmentro



console.log("");
console.log("--- toLowerCase() e toUpperCase() ---");

// toLowerCase() e toUpperCase()
console.log(stringExemplo.toLowerCase()); // curso de javaScript
console.log(stringExemplo.toUpperCase());// CURSO DE JAVASCRIPT



console.log("");
console.log("--- startsWith() , endsWith() e includes() ---");

// startsWith() , endsWith() e includes()  #Obs: As funçõs SÃO Case Sensitive
console.log(stringExemplo.startsWith("Curso")); // Retorna "True"
console.log(stringExemplo.endsWith("Python")); // Retorna "false"
console.log(stringExemplo.includes("JavaScript")); // Retorna "True"



console.log("");
console.log("--- substring() ---");

// substring()
console.log(stringExemplo.substring(0, 5)); // Cria uma nova string com um corte baseado nos indices passados por parâmetro



console.log("");
console.log("--- replace() e replaceAll() ---");

// replace() e replaceAll()
console.log(stringExemplo.replace("JavaScript", "JS")); // Curso de JS - substitui a string passada na primeira posição do parâmetro pela string passada na segunda posição
console.log(stringExemplo.replaceAll("JavaScript", "JAVA")); // Curso de JAVA - substitui TODAS as strings iguals a passada na primeira posição do parâmetro pela string passada na segunda posição



console.log("");
console.log("--- split() ---");

// split()
console.log(stringExemplo.split(" ")); // ['Curso', 'de', 'JavaScript'] - Cria um array com as palavras da string usando o separador definido nos parâmetros



console.log("");
console.log("--- trim() ---");

// trim() - Essa função é utilizada para remover os espaçoes em branco no inicio e no fim das strings
console.log("   String para o exemplo da função trim() - SEM aplicação da função    ");
console.log("   String para o exemplo da função trim() - COM aplicação da função    ".trim());



console.log("");
console.log("--- repeat() ---");

// repeat()
console.log(stringExemplo.repeat(2)); // Repete a string quantas vezes foram solicitadas por parâmetro



console.log("");
console.log("--- padStart() e padEnd() ---");

// padStart() e padEnd() - Essas funções recebem o tamanho de string desejado na primeira posição dos parâmetros e na segunda posição recebe como desejamos completar esse espaço para chegar ao tamanho desejado
console.log(stringExemplo.padStart(25, ".")); // ......Curso de JavaScript
console.log(stringExemplo.padEnd(25, ".")); // Curso de JavaScript......



console.log("");
console.log("--- indexOf() e lastIndexOf() ---");

// indexOf() e lastIndexOf()
console.log(stringExemplo.indexOf("a")); // 10 - Exibe o index da PRIMEIRA ocorrência da letra "a"
console.log(stringExemplo.lastIndexOf("a")); // 12 - Exibe o index da ÚLTIMA ocorrência da letra "a"

