const prompt = require('prompt-sync')();

let N1 = Number(prompt("Entre com N1: "));
let N2 = Number(prompt("Entre com o N2: "));

if( N1 > N2){
    console.log ("O valor " + N1 + " é maior que " + N2);
}else{
    console.log("O valor " + N2 + " é maior que " + N1);
}