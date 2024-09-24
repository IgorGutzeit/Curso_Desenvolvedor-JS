let arr = [1, 2, 3, 4, 5];

for (let index in arr){
    console.log("Index: " + index); // retorna os indexes
    console.log("Elemento: " + arr[index]); // retorna os elementos
};


console.log("-------------------");


const objeto = {
    a: 1,
    b: 2,
    c: 3
};

for (let key in objeto){
    console.log(key + " - " + objeto[key]);
};
