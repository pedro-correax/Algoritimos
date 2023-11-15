//Ler uma matriz 4x5 de reais, calcular e imprimir a soma de todos os seus elementos.

const prompt = require('prompt-sync')();

let matriz = [];

matriz [0] = [1, 2, 3, 4, 5];
matriz [1] = [1, 2, 3, 4, 5];
matriz [2] = [1, 2, 3, 4, 5];
matriz [3] = [1, 2, 3, 4, 5];
matriz [4] = [1, 2, 3, 4, 5];

let soma = 0;
let qtdLinhas = 4;
let qtdColunas = 5;

for (let l = 0; l < qtdLinhas; l++) {
    for(let c = 0; c < qtdColunas; c++){
     console.log(matriz[l][c])
     matriz[l][c] = Number(prompt("Insira o valor:["+l+"]["+c+"]"));
     soma = soma + matriz[l][c]
    }; 
}

console.table(matriz);
console.log("A soma da matriz é: " + soma)