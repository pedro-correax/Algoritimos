const prompt = require('prompt-sync')();

let i, soma = 0, menor, maior;
let vetor = [];

for(i = 0; i < 15; i++){
    vetor[i] = Number(prompt('Entre com seu número:  '));
}


for(i = 0; i < 15; i++){
    soma = soma + vetor[i];
}

console.log("Média é: " + soma/15)

maior = vetor[0];
for(i = 1; i < 15; i++){
    if(maior < vetor[i]){
        maior = vetor[i]
    }
}

console.log("O maior é: " + maior);

menor = vetor[0];
for(i = 1; i < 15; i++){
    if(menor > vetor[i]){
        menor = vetor[i]
    }
}

console.log("O menor é: " + menor);