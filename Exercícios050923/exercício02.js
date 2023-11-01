const prompt = require("prompt-sync")();

let N1 = Number(prompt("Entre com N1: "));
let N2 = Number(prompt("Entre com N2: "));
let N3 = Number(prompt("Entre com N3: "));
let N4 = Number(prompt("Entre com N4: "));

let media = (N1 + N2 + N3 +N4)/4;

if ( media >= 7){
    console.log("Aprovado!");
}else {
    console.log("Reprovado!");
}