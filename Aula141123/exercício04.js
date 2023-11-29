/*Criar um algoritmo que leia os elementos de uma matriz inteira 5 x 5 e escreva se ela é triangular ou não*/

const prompt = require('prompt-sync')();

let m = [];

for (let linha = 0; linha < 5; linha++) {
    m[linha] = [];
    for (let coluna = 0; coluna < 5; coluna++) {
        m[linha][coluna] = Number(prompt("Entre com um número: "));
        
    }
    
}

