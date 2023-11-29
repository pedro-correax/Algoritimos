const prompt = require('prompt-sync')();

function somatório(num) {
    let soma = 0;
    for (i = 1; i<= num; i++) {
        soma = soma + i;    
}   
    return soma;
}

let num
num = prompt("Entre com seu número: ")
console.log("O somatório é: " + somatório(num))