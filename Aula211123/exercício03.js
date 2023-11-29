const prompt = require('prompt-sync')();

function pot(base, expoente) {
    let result = base ** expoente;   
    return result;
}

let b;
let e;
b = prompt("Entre com a base: ")
e = prompt("Entre com o expoente: ")
console.log("Resultado = " + pot(b,e));