const prompt = require('prompt-sync')();

let qtd = Number(prompt("Entre com a qtde de numeros: "));
let i = 0 


while(i < qtd){
    console.log("Numero = " + i);
    i++;
}

for(let j = 0; i < qtd; j++){
    console.log("Numero = " + j);
}