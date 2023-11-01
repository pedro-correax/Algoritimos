const prompt = require('prompt-sync')();

let EntradaArray = [];

for (let i = 0; i < 8; i++){
    let n = Number(prompt("Entre com seu número: "))
    EntradaArray[i] = n;
}
for (let i = EntradaArray.length - 1; i >= 0; i--){
   console.log(EntradaArray[i]) 
}

