const agora = new Date();

console.log(agora.toLocaleDateString());
console.log(agora.toLocaleTimeString());
console.log(agora.toLocaleString());

console.log("-------------------------------------------");

// Formatando para o padrão americano
console.log(agora.toLocaleDateString('en-US'));
console.log(agora.toLocaleTimeString('en-US'));
console.log(agora.toLocaleString('en-US'));

