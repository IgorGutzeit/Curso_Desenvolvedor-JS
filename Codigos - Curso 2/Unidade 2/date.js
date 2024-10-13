let agora = new Date();
console.log(agora);


let dataEspecifica1 = new Date(2024, 7, 14, 22, 15, 30);
// console.log(dataEspecifica1); // 14 de agosto de 2024 - 22:15:30

let dataEspecifica2 = new Date('2024-08-20T22:15:30');
// console.log(dataEspecifica2); // 20 de agosto de 2024 - 22:15:30

let dataEspecifica3 = new Date('2022-08-10');
// console.log(dataEspecifica3); //  de agosto de 2024 - 22:15:30



// Pegando dados específicos da data

console.log(agora.getFullYear()); // 2024
console.log(agora.getMonth() + 1); // 10
console.log(agora.getDate()); // dia atual
console.log(agora.getDay()); //  
console.log(agora.getHours()); 
console.log(agora.getMinutes());
console.log(agora.getSeconds());


console.log(agora.getTime());

let teste = new Date(1728001695977);
console.log(teste);


const dataCompleta = `${agora.getDate()}/${agora.getMonth() + 1}/${agora.getFullYear()}`;
console.log(dataCompleta);



