
let cadastro = {
    
    matricula: 123456,
    nome: "Igor",
    idade: 25,
    endereco: "Tv. Vileta, 1818",
    cidade: "Belém"    
};

for (let key in cadastro){
    console.log(key + ": " + cadastro[key]);
};