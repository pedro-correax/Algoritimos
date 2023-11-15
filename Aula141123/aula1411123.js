const prompt = require('prompt-sync')();

let matriz = [];
let qtdLinhas = 3;
let qtdColunas = 3;

for(let i = 0;i < qtdLinhas; i++){
    matriz[i] = []
}

for (let l = 0; l < qtdLinhas; l++) {
   for(let c = 0; c < qtdColunas; c++){
    console.log("Acessando a posição: matriz["+l+"]["+c+"] ");
    matriz[l][c] = 0;
   }; 
}

console.table(matriz);

/*for(let l = 0; l < qtdLinhas; l++){
    console.log(matriz[l])


for(let l = 0; l < qtdLinhas; l++){
    for(let c = 0; c < qtdColunas; c++){
        console.log("Matriz["+l+"]["+c+"] => " + matriz[l][c])
    }
}*/