let pessoa = {

    nome: "igor",
    idade: 25,

    endereco: {
        logradouro: "Rua Antonio Barreto",
        numero: 1947
    }, // Outro objeto que faz parte das propriedades do objeto pessoa
    
    tecnologias: ["JavaScript", "JAVA", "HTML", "CSS"], //Array que faz parte das propriedades do objeto pessoa

    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome);
    } // Função que faz parte dos métodos do objeto pessoa
};

console.log(pessoa);

// Acessando a propriedade "nome" do objeto pessoa
console.log(pessoa.nome);

// Alterando o valor da propriedade "nome" do objeto pessoa
pessoa.nome = "João";

// Outra forma de acessar o valor de um atributo do objeto
console.log(pessoa["nome"]);

// Acessando o valor "logradouro" dentro do objeto filho "endereco" 
console.log(pessoa.endereco.logradouro);

// Chamando o método saudação do objeto pessoa
pessoa.saudacao();

// Criando uma nova propriedade no objeto
pessoa.matricula = 12345;
console.log(pessoa.matricula);

// Criando uma nova propriedade no objeto filho "endereco"
pessoa.endereco.complemento = "Em frente ao MC Donalds";
console.log(pessoa.endereco.complemento);

