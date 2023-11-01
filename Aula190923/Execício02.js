const prompt = require('prompt-sync')();

let n = Number(prompt("Entre com seu numero: "))
let i = 1;
while(i <= 10){
    //let res = n*i
    console.log(n + "x" + i + " = " + n*i)
    i++;
}
