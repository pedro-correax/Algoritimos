const prompt = require('prompt-sync')();

function fatorial(num) {
    let fat = 1;
    for (let i = 1; i<= num; i++) {
        fat = fat * i;    
}   
    return fat;
}

let num;
num = prompt("Entre com seu número: ")
console.log("O somatório é: " + fatorial(num));