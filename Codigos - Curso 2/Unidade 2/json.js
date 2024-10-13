const jsonString = '{ "name": "Igor", "age": 25, "city": "Belém" }';

// JSON.parse(); - converte uma string JSON em um objeto JavaScript
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name);

// Manipulando o objeto criado
jsonObject.name = "João";


// JSON.stringify(); - converte um objeto JavaScript em uma string JSON
const jsonString2 = JSON.stringify(jsonObject);

console.log("String JSON: " + jsonString2);