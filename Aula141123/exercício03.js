//Criar um algoritmo que entre com valores inteiros para uma matriz m3x3e imprima a matriz final, conforme mostrado a seguir:

const prompt = require('prompt-sync')();

let matriz = [];

matriz [0] = [1, 2, 3];
matriz [1] = [4, 5, 6];
matriz [2] = [7, 8, 9];


let qtdLinhas = 3;
let qtdColunas = 3;

/*for (let l = 0; l < qtdLinhas; l++) {
    for(let c = 0; c < qtdColunas; c++){
     console.log(matriz[l][c])
     matriz[l][c] = Number(prompt("Insira o valor:["+l+"]["+c+"]"));
    }; 
}*/
 console.table(matriz)

 let linha1 = matriz[0];
 let linha2 = matriz[1];
 let linha3 = matriz[2];

 let matrizTrocada =[
    linha3,
    linha2,
    linha1
 ]

 let matrizFinal = matrizTrocada;

 for (let linha = 0; linha < matrizTrocada.length; linha++) {
     matrizFinal[linha] = [
         matrizTrocada[linha][2],
         matrizTrocada[linha][1],
         matrizTrocada[linha][0],
     ];
 }
 
 console.table(matrizTrocada)