let arr = [1, 2, 3, 4, 5];

// push(): adiciona um ou mais elementos no final do Array
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]


// unshift(): adiciona um ou mais elementos início do Array
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]


// pop(): remove o último elemento do Array
arr.pop();
console.log(arr); // [0, 1, 2, 3, 4, 5]


// shift(): remove o primeiro elemento do Array
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]