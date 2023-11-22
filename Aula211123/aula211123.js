const prompt = require('prompt-sync')();

/*function calculaPotencia(base, expo) {
    let resultado = base ** expo;
    return resultado;
}


/*let result =  calculaPotencia(2, 3)
console.log(result);

let  resultado = 10
let teste = calculaPotencia(3,2);
console.log(resultado)*/


/*let base = 2;
let expo = 3;
let resultado = calculaPotencia(base,expo)
console.log(resultado)*/

function exibiMatriz(m) {
    console.table(m);
    m[2] = "Programar é legal";
}

let vet = [1, 2, 3];
exibiMatriz(vet);
console.table(vet);
