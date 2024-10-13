export function filtrarPares(arr) {
    return arr.filter((numero) => numero % 2 == 0);
};

export function dobrarValores(arr) {
    return arr.map((numero) => numero * 2);
};

export function somarValores(arr) {
    return arr.reduce((soma, numero) => soma + numero, 0);
};

export function calcularMedia(arr) {
    return somarValores(arr) / arr.length;
};